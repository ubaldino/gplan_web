import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const CREAR_PTDI_RESULTADO_MUTATION = gql`
    mutation($data:PtdiResultadoInput) {
        createPtdiResultado(data: $data) {
            id
            codigo
            lineamiento_estrat_territorio
            objetivo_estrategico
        }
    }
`

const PTDI_RESULTADO_QUERY = gql`
    query($where : PtdiResultadoUniqueInput){
    ptdiResultado(where: $where) {
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
        entidaddes_sigla
        area_organizacional
        descripcion_resultado
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
        urbano_rural
        distrito
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

`

export const usePtdiResultadoStore = defineStore({
  id: 'PtdiResultadoStore',
  state: () => ({
    ptdiResultado: {}
  }),
  getters: {},
  actions: {
    async createPtdiResultado(data) {
      let res = null
      try {
        const { data : { createPtdiResultado } } = await apolloClient.mutate({
          mutation: CREAR_PTDI_RESULTADO_MUTATION,
          variables: { data }
        })
        res = createPtdiResultado
      } catch (error) {
        console.log(error);
      }
      return res
    },
    async fetchUnique(where) {
      try {
        const { data : { ptdiResultado } } = await apolloClient.query({
          query: PTDI_RESULTADO_QUERY,
          variables: { where }
        })
        this.ptdiResultado = {...ptdiResultado}
      } catch (error) {
        console.log(error);
      }
    }
  }
})