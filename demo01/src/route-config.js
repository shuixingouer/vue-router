import Home from './components/Home.vue'
import About from './components/About.vue'

//映射路由
export default {
	'home': { //是一条路由的key，它表示路径;
		component: Home  //表示该条路由映射的组件;
	},
	'about': {
		component: About
	}
}