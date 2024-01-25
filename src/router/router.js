import { createRouter, createWebHistory } from 'vue-router'

import Home from '../view/Home.vue'
import Detail from '../view/Detail.vue'
import CartDetail from '../view/CartDetail.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/detail/:id',
        name: 'DetailPage',
        component: Detail,
    },
    {
        path: '/cart-detail',
        component: CartDetail
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
