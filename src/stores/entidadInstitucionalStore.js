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

const ENTIDADES_SELECT_QUERY = gql`
  query {
    entidadesInstitucionalesSelect {
      codigo
      denominacion
      sigla
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
        resultados {
          id
          codigo
          lineamiento_estrat_territorio
          objetivo_estrategico
          pdes_pilares_codigo
          pdes_ejes_codigo
          pdes_meta_codigo
          pdes_resultado_codigo
          pdes_accion_codigo
          sectorPlanificacion {
              id
              nombre
              lineamiento_estr_territo
              objetivo_estrategico
          }
          entidad_codigo
          entidades_sigla
          area_organizacional
          descripcion_resultado
          indicador_tipo
          indicador_relativo_denominador
          indicador
          formula
          linea_base
          meta_estimacion
          meta_prog_2021
          meta_prog_2022
          meta_prog_2023
          meta_prog_2024
          meta_prog_2025
          ponderacion
          fuente_informacion
          departamento_codigo
          departamento_sigla
          region_codigo
          region
          municipios_codigo
          municipios_sigla
          distritos_tipo
          distritos
          presup_total
          presupuesto_2021
          presupuesto_2022
          presupuesto_2023
          presupuesto_2024
          presupuesto_2025
          created_at
          updated_at
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
    entidadesInstitucionalesSelect: [],
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
    async fetchEntidadesSelect() {
      try {
        const { data : { entidadesInstitucionalesSelect } } = await apolloClient.query({
          query: ENTIDADES_SELECT_QUERY,
          variables: {}
        })
        this.entidadesInstitucionalesSelect = [...entidadesInstitucionalesSelect]
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
