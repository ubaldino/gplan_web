import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const ENTIDAD_MUTATION = gql`
    mutation($data: EntidadInstitucionalInput) {
        createEntidadInstitucional(data: $data) {
            codigo
            denominacion
            sigla
            departamento {
            codigo
            denominacion
            sigla
            }
            municipo
        }
    }
`
const ENTIDADES_QUERY = gql`
  query {
    entidadesInstitucionales {
      codigo
      denominacion
      sigla
      departamento {
        codigo
        denominacion
        sigla
      }
      municipo
      tipoEntidad {
        codigo
        nombre
        descripcion
      }
    }
  }
`
const ENTIDAD_QUERY = gql`
  query ($codigo: String){
    entidadInstitucional(codigo: $codigo) {
      codigo
      denominacion
      sigla
      departamento {
        codigo
        denominacion
        sigla
      }
      municipo
      tipoEntidad {
        codigo
        nombre
        descripcion
      }
    }
  }
`

export const useEntidadInstitucionalStore = defineStore({
  id: 'EntidadInstitucionalStore',
  state: () => ({
    entidadesInstitucionales: [],
    entidadInstitucional: {}
  }),
  getters: {
    all: (state) => state.entidadesInstitucionales
  },
  actions: {
    async storeEntidadInstitucional(values) {
      let res = null
      try {
        const { data : { createEntidadInstitucional } } = await apolloClient.mutate({
          mutation: ENTIDAD_MUTATION,
          variables: { data : values }
        })
        res = createEntidadInstitucional
      } catch (error) {
        console.log(error);
      }
      return res
    },
    async fetchEntidades() {
      try {
        const { data : { entidadesInstitucionales } } = await apolloClient.query({
          query: ENTIDADES_QUERY,
          variables: {}
        })
        this.entidadesInstitucionales = [...entidadesInstitucionales]
      } catch (error) {
        console.log(error);
      }
    },
    async fetchEntidad(codigo) {
      try {
        const { data : { entidadInstitucional } } = await apolloClient.query({
          query: ENTIDAD_QUERY,
          variables: { codigo }
        })
        this.entidadInstitucional = {...entidadInstitucional}
      } catch (error) {
        console.log(error);
      }
    }
  }
})
