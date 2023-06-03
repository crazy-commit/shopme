import { createApp } from 'vue'
import App from './App.vue'
// elelment 组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// windicss库
import 'virtual:windi.css'
// 路由
import router from './router/index.js'
// 全局引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(ElementPlus)

app.use(router)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.mount('#app')