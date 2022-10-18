import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const DEPARTAMENTOS_QUERY = gql`
  query {
    tiposEntidad {
      codigo
      nombre
      descripcion
    }
  }
`

export const useTiposEntidadStore = defineStore({
  id: 'tiposEntidadStore',
  state: () => ({
    tiposEntidad: []
  }),
  getters: {
    all: (state) => state.tiposEntidad
  },
  actions: {
    async fetchTiposEntidad() {
      try {
        const { data : { tiposEntidad } } = await apolloClient.query({
          query: DEPARTAMENTOS_QUERY,
          variables: {}
        })
        this.tiposEntidad = [...tiposEntidad]
      } catch (error) {
        console.log(error);
      }
    }
  }
})
