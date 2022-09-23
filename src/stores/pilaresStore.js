import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import { useQuery } from '@vue/apollo-composable';
import gql from "graphql-tag";


const PILARES_QUERY = gql`
  query {
    pilares {
      codigo
      denominacion
    }
  }
`;


export const pilaresStore = defineStore({
  id: 'pilaresStore',
  state: () => ({
    pilares: []
  }),
  getters: {
    all: (state) => state.pilares
  },
  actions: {
    async fetchPilares() {
      try {
        const { data : { pilares } } = await apolloClient.query({
          query: PILARES_QUERY,
          variables: {}
        })
        this.pilares = [...pilares]
      } catch (error) {
        console.log(error);
      }
    },
    add() {
    },
    remove() {
    },
    random() {
    }
  }
})
