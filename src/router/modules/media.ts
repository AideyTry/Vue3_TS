import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
    path: 'media',
    name: 'media-index',
    component: () => import('@/views/media/index.vue')
}

export default routes