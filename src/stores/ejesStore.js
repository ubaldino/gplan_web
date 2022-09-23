import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const EJES_QUERY = gql`
  query {
    ejes {
      codigo
      denominacion
    }
  }
`

export const ejesStore = defineStore({
  id: 'ejesStore',
  state: () => ({
    ejes: []
  }),
  getters: {
    all: (state) => state.ejes
  },
  actions: {
    async fetchEjes() {
      try {
        const { data : { ejes } } = await apolloClient.query({
          query: EJES_QUERY,
          variables: {}
        })
        this.ejes = [...ejes]
      } catch (error) {
        console.log(error);
      }
    }
  }
})
