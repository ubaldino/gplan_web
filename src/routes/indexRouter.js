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
