import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const SECTOR_QUERY = gql`
  query {
    sectoresPlanificacion {
      id
      nombre
      lineamiento_estr_territo
      objetivo_estrategico
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
          query: SECTOR_QUERY,
          variables: {}
        })
        this.ejes = [...ejes]
      } catch (error) {
        console.log(error);
      }
    }
  }
})
