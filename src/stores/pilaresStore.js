import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import { useQuery } from '@vue/apollo-composable';
import gql from "graphql-tag";


const PILARES_QUERY = gql`
{
  pilares {
    codigo
    denominacion
    ejes {
      eje {
        codigo
        denominacion
        metas {
          codigo
          denominacion
          resultados {
            codigo
            denominacion
            acciones {
              codigo
              denominacion
            }
          }
        }
      }
    }
  }
}
`;
const PILARES_TREE_QUERY = gql`
{
  pilaresTree
}
`;


export const pilaresStore = defineStore({
  id: 'pilaresStore',
  state: () => ({
    pilares: [],
    pilaresTree: []
  }),
  getters: {
    all: (state) => state.pilares,
    allForTable: (state) => state.pilares.map((e,i)=>({key: `${i}`, ...e})),
    allTree: (state) => state.pilaresTree
  },
  actions: {
    async fetchPilares() {
      try {
        const { data : { pilares } } = await apolloClient.query({
          query: PILARES_QUERY,
          variables: {}
        })
        this.pilares = [...pilares]
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPilaresTree() {
      try {
        const { data : { pilaresTree } } = await apolloClient.query({
          query: PILARES_TREE_QUERY,
          variables: {}
        })
        this.pilaresTree = [...pilaresTree]
      } catch (error) {
        console.log(error);
      }
    },
    add() {
    },
    remove() {
    },
    random() {
    }
  }
})
