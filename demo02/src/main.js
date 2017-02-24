import Vue from 'vue'
import VueRouter from 'vue-router'
import routeConfig from './route-config'

Vue.use(VueRouter)

const router = new VueRouter()
router.map(routeConfig)
const App = Vue.extend(require('./app.vue'))
router.start(App, '#app')

//应用在首次运行时右侧是一片空白，应用通常都会有一个首页
router.redirect({
    '/': '/home'
})