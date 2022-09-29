import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "index",
        component: () => import("../pages/index.vue"),
        meta: {
            layout: "default"
        }
    },
    {
        path: "/ptdi",
        name: "ptdi-index",
        component: () => import("../pages/ptdi/indexPtdi.vue"),
        meta: {
            layout: "default"
        }
    },
    {
        path: "/pdes",
        name: "pdes-index",
        component: () => import("../pages/pdes/indexPdes.vue"),
        meta: {
            layout: "default"
        }
    },
    {
        path: "/pilares",
        name: "pilares-index",
        component: () => import("../pages/pilares/indexPilar.vue"),
        meta: {
            layout: "default"
        }
    },
    {
        path: "/ejes",
        name: "ejes-index",
        component: () => import("../pages/ejes/indexEje.vue"),
        meta: {
            layout: "default"
        }
    },
    {
        path: "/sector/planificacion/tecnico",
        name: "ejes-index",
        component: () => import("../pages/sector/planificacion/indexTecnico.vue"),
        meta: {
            layout: "default"
        }
    },
    {
        path: "/sector/planificacion/tecnico/add",
        name: "sector-add",
        component: () => import("../pages/sector/planificacion/addTecnico.vue"),
        meta: {
            layout: "default"
        }
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("../pages/404.vue"),
        meta: {
            layout: "default"
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
