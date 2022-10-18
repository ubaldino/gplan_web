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

export const sectoresPlanificacionStore = defineStore({
  id: 'sectoresPlanificacionStore',
  state: () => ({
    sectoresPlanificacion: []
  }),
  getters: {
    all: (state) => state.sectoresPlanificacion
  },
  actions: {
    async fetchEjes() {
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
