import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const REPORTE_QUERY = gql`
query($where : EntidadInstitucionalUnique) {
  ptdi_reporte(where: $where) {
    link
    nombre
  }
}
`

export const usePtdiReporteStore = defineStore({
  id: 'ptdiReporteStore',
  state: () => ({
    ptdi_reporte: null
  }),
  getters: {
  },
  actions: {
    async fetchPtdiReporte(where) {
      try {
        const { data : { ptdi_reporte } } = await apolloClient.query({
          query: REPORTE_QUERY,
          variables: {where}
        })
        this.ptdi_reporte = ptdi_reporte
      } catch (error) {
        console.log(error);
      }
      return this.ptdi_reporte
    }
  }
})
