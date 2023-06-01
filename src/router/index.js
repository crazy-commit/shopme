import { createRouter,createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('~/pages/404.vue')
    },
    {
        path:'/',
        component: () => import('~/pages/index.vue')
    },
    {
        path:'/about',
        component: () => import('~/pages/about.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router