import Vue from 'vue'
import VueRouter from 'vue-router'
import routeConfig from './route-config'

Vue.use(VueRouter)

//����Router
const router = new VueRouter()
router.map(routeConfig)

//����·��
const App = Vue.extend(require('./app.vue'))
router.start(App, '#app') //��ʾrouter�ᴴ��һ��Appʵ�������ҹ��ص�#appԪ�ء�

//Ӧ�����״�����ʱ�Ҳ���һƬ�հף�Ӧ��ͨ��������һ����ҳ
router.redirect({
    '/': '/home'
})