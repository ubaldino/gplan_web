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
        tipoEntidad {
          codigo
          nombre
          descripcion
        }
        ptdis {
          id
          quinquenio {
            id
            gestion_inicio
            gestion_fin
          }
        }
        ptdi {
          id
          quinquenio {
            id
            gestion_inicio
            gestion_fin
          }
        }
      }
    }
  }
`

const DEPARTAMENTOS_SELECT_QUERY = gql`
  query {
    departamentos {
      id
      codigo
      denominacion
      sigla
      municipios {
        id
        codigo
        denominacion
        sigla
      }
    }
  }
`

export const useDepartamentosStore = defineStore({
  id: 'departamentosStore',
  state: () => ({
    departamentos: [],
    departamentosSelect: []
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
    },
    async fetchDepartamentosForSelect() {
      try {
        const { data : { departamentos } } = await apolloClient.query({
          query: DEPARTAMENTOS_SELECT_QUERY
        })
        this.departamentosSelect = [...departamentos]
      } catch (error) {
        console.log(error);
      }
    }
  }
})
