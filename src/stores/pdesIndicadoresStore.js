import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const PDES_INDICADORES_QUERY = gql`
  query($where:IndicadoresWhereInput) {
    pdesIndicadores(where: $where) {
        codigo
        descripcion
        linea_base
        estimacion_2025
    }
  }
`;

export const usePdesIndicadoresStore = defineStore({
  id: 'pdesIndicadoresStore',
  state: () => ({
    pdesIndicadores: [],
  }),
  getters: {
  },
  actions: {
    async resetPdesIndicadores() {
        this.pdesIndicadores = []
    },
    async fetchPdesIndicadores(where) {
      try {
        const { data : { pdesIndicadores } } = await apolloClient.query({
          query: PDES_INDICADORES_QUERY,
          variables: { where }
        })
        this.pdesIndicadores = [...pdesIndicadores]
      } catch (error) {
        console.log(error);
      }
    },
  }
})
