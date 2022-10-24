export default [
  {
    path: '/usuarios',
    name: 'usuarios-index',
    component: () => import("../pages/usuarios/IndexUsuarios.vue"),
    meta: {
      layout: "main-layout"
    }
  },
]
