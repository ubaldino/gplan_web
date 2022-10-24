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
        id
        codigo
        denominacion
        sigla
      }
      tipoEntidad {
        codigo
        nombre
        descripcion
      }
      tecnicos {
        usuario {
          username
          nombres
          apellido_paterno
          apellido_materno
          email
        }
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
`



const AGREGAR_TECNICO_MUTATION = gql`
  mutation($data: UsuarioEntidadInputType) {
  agregarTecnicoEnEntidad(data: $data) {
    codigo
    denominacion
    sigla
    departamento {
      id
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
    async agregarTecnicoEnEntidad(data) {
      let res = null
      try {
        const { data : { agregarTecnicoEnEntidad } } = await apolloClient.mutate({
          mutation: AGREGAR_TECNICO_MUTATION,
          variables: { data : data }
        })
        this.fetchEntidad(data.entidad_codigo)
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
