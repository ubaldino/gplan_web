import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const APERTURAS_PROGRAMATICA_QUERY = gql`
query( $where: InputWhereAperturaProgramatica){
  aperturasProgramatica(where: $where) {
    codigo
    descripcion
    gestion
    proyectosPrograma {
      codigo
      da_ue_cat_real
      categoria_programatica
      nombre
    }
  }
}
`;

const APERTURAS_PROGRAMATICA_TREE_QUERY = gql`
query {
  aperturasProgramaticaTree
}
`;

export const useAperturaProgramaticaStore = defineStore({
  id: 'aperturaProgramaticaStore',
  state: () => ({
    aperturasProgramatica: [],
    aperturasProgramaticaTree: [],
  }),
  getters: {
  },
  actions: {
    async resetAperturaProgramatica() {
        this.aperturasProgramatica = []
    },
    async fetchAll(where) {
      try {
        const { data : { aperturasProgramatica } } = await apolloClient.query({
          query: APERTURAS_PROGRAMATICA_QUERY,
          variables: { where }
        })
        this.aperturasProgramatica = [...aperturasProgramatica]
      } catch (error) {
        console.log(error);
      }
    },
    async fetchAllTree() {
      try {
        const { data : { aperturasProgramaticaTree } } = await apolloClient.query({
          query: APERTURAS_PROGRAMATICA_TREE_QUERY,
          variables: {  }
        })
        this.aperturasProgramaticaTree = [...aperturasProgramaticaTree]
      } catch (error) {
        console.log(error);
      }
    },
  }
})
