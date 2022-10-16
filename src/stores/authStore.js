import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const AUTH_QUERY = gql`
  mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      authenticated
      token
      usuario {
        username
        nombres
        apellido_paterno
        apellido_materno
        email
        rol {
          id
          nombre
        }
      }
    }
  }
  `;

  const ME_QUERY = gql`
    mutation {
      me {
        username
        nombres
        apellido_paterno
        apellido_materno
        email
        rol {
          id
          nombre
          descripcion
        }
      }
    }
  `

export const useAuthStore = defineStore({
  id: 'authStore',
  state: () => ({
    loggedIn: localStorage.getItem("authorization") ? true : false,
    usuario: null
  }),
  getters: {
    lastOperation: (state) => state.operation
  },
  actions: {
    async login({username, password}) {
      try {
        const { data : { login } } = await apolloClient.mutate({
          mutation: AUTH_QUERY,
          variables: { username, password }
        })

        if (login.authenticated) {
          const token = `Bearer ${login.token}`;

          localStorage.setItem("authorization", token);
          this.$reset();
          // axios.defaults.headers.common["Authorization"] = token;
          await this.fetchUser();
        }
        return true
      } catch (error) {
        console.log(error);
        return false
      }
    },

    async logout() {
        localStorage.removeItem("authorization");
        this.$reset();
    },

    async fetchUser() {
      try {
        const { data : { me } } = await apolloClient.mutate({
          mutation: ME_QUERY
        })
        this.usuario = me
        console.log(me);
      } catch (error) {
        console.log(error);
      }
    },

    remove() {
      this.count--;
      this.operation = 'remove';
    },

    random() {
      this.count = Math.floor(Math.random() * 101);
      this.operation = 'random';
    }
  }
})
