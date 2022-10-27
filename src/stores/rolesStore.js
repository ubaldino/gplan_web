import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const ROLES_QUERY = gql`
query {
  roles {
    id
    nombre
    descripcion
    permisos {
      activo
    }
  }
}

`

export const useRolesStore = defineStore({
  id: 'rolesStore',
  state: () => ({
    roles: []
  }),
  getters: {
  },
  actions: {
    async fetchAll() {
      try {
        const { data : { roles } } = await apolloClient.query({
          query: ROLES_QUERY,
          variables: {}
        })
        this.roles = [...roles]
      } catch (error) {
        console.log(error);
      }
    }
  }
})
