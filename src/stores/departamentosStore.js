import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const DEPARTAMENTOS_QUERY = gql`
  query {
    departamentos {
      codigo
      denominacion
      sigla
      entidades {
        codigo
        denominacion
        sigla
        municipo
        tipoEntidad {
          codigo
          nombre
          descripcion
        }
      }
    }
  }
`

export const useDepartamentosStore = defineStore({
  id: 'departamentosStore',
  state: () => ({
    departamentos: []
  }),
  getters: {
    all: (state) => state.departamentos
  },
  actions: {
    async fetchDepartamentos() {
      try {
        const { data : { departamentos } } = await apolloClient.query({
          query: DEPARTAMENTOS_QUERY,
          variables: {}
        })
        this.departamentos = [...departamentos]
      } catch (error) {
        console.log(error);
      }
    }
  }
})
