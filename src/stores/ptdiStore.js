import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const CREAR_PTDI_MUTATION = gql`
    mutation($data:PtdiInput) {
      createPtdi(data: $data) {
        id
        quinquenio {
          id
          gestion_inicio
          gestion_fin
        }
      }
    }
`

export const usePtdiStore = defineStore({
  id: 'PtdiStore',
  state: () => ({}),
  getters: {},
  actions: {
    async createPtdi(data) {
      let res = null
      try {
        const { data : { createPtdi } } = await apolloClient.mutate({
          mutation: CREAR_PTDI_MUTATION,
          variables: { data }
        })
        res = createPtdi
      } catch (error) {
        console.log(error);
      }
      return res
    }
  }
})
