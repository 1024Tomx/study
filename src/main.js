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

import vant from 'vant';
import 'vant/lib/index.css';
/**
 * git init
 * git add .
 * git commit -m "备份"
 * git remote -v  查看关联
 * git remote add origin ""
 * git push
 * 
 */

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vant)
// app.use(elmentPlus)
app.mount('#app')

// 1.
// 监听滚动到底部的事件hook抽取，防抖节流
// 显示搜索框的内容
// 处理tabbar的bug
// 展示搜索框的内容
// 日期的共享处理
// 2.
// loading组件的封装
// 控制加载组件是否显示(加载中不可交互)

// 3.跳转到详情页
// 导航栏
// 轮播图
// 自定义指示器
// 数据处理展示
// 展示自定义指示器数据

// 4.详情页顶部信息展示

// 1.项目介绍(用的什么技术去实现，用到了那些第三库,总共分为几个模块，每一个模块是干什么的)
// 小组成员(项目小组里面有谁，每个成员完成了什么样的内容)
// 项目展示(打开项目)  项目的完成方式或者步骤项目完成过程
// 项目心得 (今天)

// 2.实训心得  至少800字以上(周五之前)
