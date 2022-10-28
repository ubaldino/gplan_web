import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const PROYECTO_QUERY = gql`
  query($where : InputWhereProyectoPrograma) {
    proyectosPrograma(where: $where) {
        codigo
        da_ue_cat_real
        categoria_programatica
        nombre
        presupuesto_2021
        presupuesto_2022
        presupuesto_2023
        presupuesto_2024
        presupuesto_2025
        ue {
          codigo
          nombre
        }
    }
  }
`

export const useProyectoProgramaStore = defineStore({
  id: 'proyectosProgramaStore',
  state: () => ({
    proyectosPrograma: []
  }),
  getters: {

  },
  actions: {
    async fetchAll(where) {
      try {
        const { data : { proyectosPrograma } } = await apolloClient.query({
          query: PROYECTO_QUERY,
          variables: { where }
        })
        this.proyectosPrograma = [...proyectosPrograma]
      } catch (error) {
        console.log(error);
      }
    }
  }
})
