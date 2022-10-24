export default [
    {
        path: "/entidades",
        name: "entidades-index",
        component: () => import("../pages/entidades/IndexEntidad.vue"),
        meta: {
            layout: "main-layout"
        }
    },
    {
        path: "/entidades/crear",
        name: "entidades-crear",
        component: () => import("../pages/entidades/CrearEntidad.vue"),
        meta: {
            layout: "main-layout"
        }
    },
    {
        path: "/entidades/:codigo/ptdi",
        name: "entidades-ptdi",
        component: () => import("../pages/entidades/ptdi/IndexPtdi.vue"),
        meta: {
            layout: "main-layout"
        }
    },
    {
        path: "/entidades/:codigo/tecnicos",
        name: "entidades-tecnicos",
        component: () => import("../pages/entidades/tecnicos/IndexTecnicos.vue"),
        meta: {
            layout: "main-layout"
        }
    },
    {
        path: "/entidades/:codigo/ptdi/resultados/agregar",
        name: "entidades-ptdi-resultados-agregar",
        component: () => import("../pages/entidades/ptdi/AgregarResultado.vue"),
        meta: {
            layout: "main-layout"
        }
    }
]
