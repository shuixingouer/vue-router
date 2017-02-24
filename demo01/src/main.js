import Vue from 'vue'
import VueRouter from 'vue-router'
import routeConfig from './route-config'

Vue.use(VueRouter)

//创建Router
const router = new VueRouter()
router.map(routeConfig)

//启动路由
const App = Vue.extend(require('./app.vue'))
router.start(App, '#app') //表示router会创建一个App实例，并且挂载到#app元素。

//应用在首次运行时右侧是一片空白，应用通常都会有一个首页
router.redirect({
    '/': '/home'
})