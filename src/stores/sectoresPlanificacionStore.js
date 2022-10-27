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

export const useSectoresPlanificacionStore = defineStore({
  id: 'sectoresPlanificacionStore',
  state: () => ({
    sectoresPlanificacion: []
  }),
  getters: {
  },
  actions: {
    async fetchAll() {
      try {
        const { data : { sectoresPlanificacion } } = await apolloClient.query({
          query: SECTOR_QUERY,
          variables: {}
        })
        this.sectoresPlanificacion = [...sectoresPlanificacion]
      } catch (error) {
        console.log(error);
      }
    }
  }
})
