/*
 * @Author: Aiden(戴林波)
 * @Date: 2022-10-15 16:06:18
 * @LastEditTime: 2022-10-15 16:15:39
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: jason_dlb@sina.cn
 */
import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
    path: 'product',
    name: 'product',
    component: RouterView,
    children: [
        {
            path: 'product_list',
            name: 'product-list',
            component: () => import('@/views/product/list/index.vue')
        },
        {
            path: 'product_classify',
            name: 'product-classify',
            component: () => import('@/views/product/classify/index.vue')
        },
        {
            path: 'product_attr',
            name: 'product-attr',
            component: () => import('@/views/product/attr/index.vue')
        },
        {
            path: 'product_reply',
            name: 'product-reply',
            component: () => import('@/views/product/reply/index.vue')
        }
    ]
}

export default routes