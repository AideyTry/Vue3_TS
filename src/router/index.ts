import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import productRoutes from '@/router/modules/product'
import orderRoutes from './modules/order'
import permissionRoutes from './modules/permission'
import mediaRoutes from './modules/media'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../layout/AppLayout.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('../views/home/index.vue')
            },
            productRoutes,
            orderRoutes,
            permissionRoutes,
            mediaRoutes
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
