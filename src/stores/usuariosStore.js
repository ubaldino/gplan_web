import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const USUARIOS_QUERY = gql`
query {
    usuarios {
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
const CREAR_USUARIO_MUTATION = gql`
mutation( $data : InputDataUsuario) {
  crearUsuario(data: $data) {
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

export const useUsuariosStore = defineStore({
  id: 'usuariosStore',
  state: () => ({
    usuarios: []
  }),
  getters: {
    usuariosSelect: (state) =>  state.usuarios.map((usuario) => ({
        label: `${usuario.nombres} ${usuario.apellido_paterno} ${usuario.apellido_materno}`,
        value: usuario.username
      }))
  },
  actions: {
    async fetchUsuarios() {
      try {
        const { data : { usuarios } } = await apolloClient.query({
          query: USUARIOS_QUERY,
          variables: {}
        })
        this.usuarios = [...usuarios]
      } catch (error) {
        console.log(error);
      }
    }
  }
})
