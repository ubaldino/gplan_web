import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const QUINQUENIOS_QUERY = gql`
  query {
  quinquenios {
    id
    gestion_inicio
    gestion_fin
  }
}
`

export const useQuinqueniosStore = defineStore({
  id: 'quinqueniosStore',
  state: () => ({
    quinquenios: []
  }),
  getters: {
    actual: (state) => {
        let current = null
        if (state.quinquenios.length) {
            let actual = new Date().getFullYear()
            current = state.quinquenios.find(e=>{
                return actual>=e.gestion_inicio && actual<=e.gestion_fin
            })
        }
        return current
    }
  },
  actions: {
    async fetchQuinquenios() {
      try {
        const { data : { quinquenios } } = await apolloClient.query({
          query: QUINQUENIOS_QUERY,
          variables: {}
        })
        this.quinquenios = [...quinquenios]
      } catch (error) {
        console.log(error);
      }
    }
  }
})
