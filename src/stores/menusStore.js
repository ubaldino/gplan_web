import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";

const MENUS_QUERY = gql`
  query {
    menus {
      name
      path
      subMenus {
        name
        path
      }
    }
  }
`

export const useMenusStore = defineStore({
  id: 'MenusStore',
  state: () => ({
    menus: [
      {
        "name": "entidades",
        "path": "/entidades",
        "fullName": "Entidades Publicas",
        "icon": "organization",
        "subMenus": []
      },
     /*
      {
        "name": "matrices",
        "path": "/matrices",
        "fullName": "Matrices",
        "icon": "",
        "subMenus": [
          {
            "name": "matrices-ptdi",
            "path": "/matrices/ptdi",
            "fullName": "Generacion Matriz PTDI",
            "icon": "analytics",
          },
          {
            "name": "matrices-pei",
            "path": "/matrices/pei",
            "fullName": "Generacion Matriz PEI",
            "icon": "article",
          }
        ]
      },
      */
      {
        "name": "migraciones",
        "path": "/migraciones",
        "fullName": "Migraciones",
        "subMenus": []
      },
      {
        "name": "reportes",
        "path": "/reportes",
        "fullName": "Reportes",
        "subMenus": []
      },
      {
        "name": "parametros",
        "path": "/parametros",
        "fullName": "Parametros",
        "subMenus": []
      }
    ],
    subMenus: [],
    leftDrawerOpen : false
  }),
  getters: {
    all: (state) => state.menus,
    allSubMenus: (state) => state.subMenus
  },
  actions: {
    async setSubMenus(name) {
      try {
        const subMenus = [...this.all].find(e=>e.name === name).subMenus
        this.subMenus = subMenus
      } catch (error) {
        this.subMenus = []
      }
    },
    setLeftDrawer (open) {
      this.leftDrawerOpen = open;
    }
  }
})
