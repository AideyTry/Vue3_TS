/*
 * @Author: Aiden(戴林波)
 * @Date: 2022-10-05 16:39:50
 * @LastEditTime: 2022-10-08 18:03:51
 * @LastEditors: Aiden(戴林波)
 * @Description:
 * @Email: jason_dlb@sina.cn
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'

createApp(App).use(router).use(store, key).mount('#app')
