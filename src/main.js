import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入element-plus
// import elmentPlus from 'element-plus'
// import "element-plus/dist/index.css"
// 引入公共文件
import "normalize.css"
import "./assets/css/index.css"

/**
 * git init
 * git add .
 * git commit -m "备份"
 * 
 */

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(elmentPlus)
app.mount('#app')
