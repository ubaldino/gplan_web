import {
  ApolloClient,
  InMemoryCache,
  ApolloLink
} from "@apollo/client/core";

import { createUploadLink } from "apollo-upload-client"
import { onError } from "@apollo/client/link/error";
import { useErrorsStore } from "./stores/useErrors";


const httpLink = createUploadLink({
    uri: '/api',
    fetchOptions: { method: 'POST' }
})

const authMiddleware = new ApolloLink((operation, forward) => {
    if (localStorage.getItem('authorization')) {
        operation.setContext({
            headers: {
                authorization: `Bearer ${localStorage.getItem('authorization')}`
            }
        })
    }
    return forward(operation)
})

const authAfterware = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
        const context = operation.getContext()
        const {
            response: { headers }
        } = context
        if (headers) {
            const token = headers.get('authorization')
            if (token) {
                localStorage.setItem('authorization', token)
            }
        }
        if (response.errors && response.errors.length) {
            if (response.errors[0].message === 'No autenticado') {
                localStorage.removeItem('authorization')
                window.location = '/login'
            }
        }
        return response
    })
})

const errorHandler = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
        useErrorsStore().$state = {
            message: graphQLErrors[0].message,
            category: graphQLErrors[0].extensions.category,
            fields: graphQLErrors[0].extensions.validation ?? { input: {} },
        };
    }
});

const link = authAfterware.concat(authMiddleware.concat(errorHandler.concat(httpLink)))

const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache({
        addTypename: false
    }),
    connectToDevTools: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore'
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    }
})

export default apolloClient
