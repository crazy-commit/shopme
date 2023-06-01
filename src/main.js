import { createApp } from 'vue'
import App from './App.vue'
// elelment 组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// windicss库
import 'virtual:windi.css'
// 路由
import router from './router/index.js'

createApp(App).use(ElementPlus).use(router).mount('#app')
