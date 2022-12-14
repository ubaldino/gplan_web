import { createRouter, createWebHistory, START_LOCATION } from "vue-router";
import { useMenusStore } from "../stores/menusStore";

import { useAuthStore } from "../stores/authStore";

import usuariosRouter from './usuariosRouter';
import entidadesRouter from './entidadesRouter';

const redirectToHomeOnLoggedIn = (to, from, next) => {
  if (useAuthStore().loggedIn) {
      next({ name: "index", replace: true });
  }
  else{
      next();
  }
};


const routes = [
     {
        path: "/",
        name: "index",
        component: () => import("../pages/index.vue"),
        meta: {
            layout: "main-layout"
        }
    },
    /*
    {
        path: "/matrices",
        name: "matrices",
        component: () => import("../pages/entidades/indexMatrices.vue"),
        meta: {
            layout: "main-layout"
        }
    },
    {
        path: "/matrices/ptdi",
        name: "ptdi-index",
        component: () => import("../pages/matrices/ptdi/indexPtdi.vue"),
        meta: {
            layout: "main-layout"
        }
    },
    */
    {
        path: "/matrices/pdes",
        name: "pdes-index",
        component: () => import("../pages/pdes/indexPdes.vue"),
        meta: {
            layout: "main-layout"
        }
    },
    {
        path: "/pilares",
        name: "pilares-index",
        component: () => import("../pages/pilares/indexPilar.vue"),
        meta: {
            layout: "main-layout"
        }
    },
/*     {
        path: "/ejes",
        name: "ejes-index",
        component: () => import("../pages/ejes/indexEje.vue"),
        meta: {
            layout: "main-layout"
        }
    }, */
    {
        path: "/sector/planificacion/tecnico",
        name: "ejes-index",
        component: () => import("../pages/sector/planificacion/indexTecnico.vue"),
        meta: {
            layout: "main-layout"
        }
    },
    {
        path: "/sector/planificacion/tecnico/add",
        name: "sector-add",
        component: () => import("../pages/sector/planificacion/addTecnico.vue"),
        meta: {
            layout: "main-layout"
        }
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../pages/Login.vue"),
        beforeEnter: redirectToHomeOnLoggedIn,
        meta: {
            layout: "empty-layout"
        }
    },
    ...entidadesRouter,
    ...usuariosRouter,
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("../pages/404.vue"),
        meta: {
            layout: "main-layout"
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    strict: true
})

router.beforeEach(async (to, from, next)=>{

    if (to.name === "login" && !useAuthStore().loggedIn) {
        next()
    } else if(useAuthStore().loggedIn) {
        const menusStore = useMenusStore();

        if (to.name.indexOf('-') < 0) {
            await menusStore.setSubMenus(to.name)
        }
        // menusStore.setLeftDrawer(menusStore.subMenus.length > 0);
        next();
    } else {
        next({
            name: "login",
            replace: true
        });
    }
})

// router.beforeResolve((to, from, next) => {})

// router.afterEach((to, from) => {})

export default router
