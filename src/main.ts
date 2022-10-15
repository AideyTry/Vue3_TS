/*
 * @Author: Aiden(戴林波)
 * @Date: 2022-10-05 16:39:50
 * @LastEditTime: 2022-10-15 10:52:16
 * @LastEditors: Aiden(戴林波)
 * @Description:
 * @Email: jason_dlb@sina.cn
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import elementPlus from './plugins/element-plus'

import "./styles/index.scss"

createApp(App).use(router).use(store, key).use(elementPlus).mount('#app')
