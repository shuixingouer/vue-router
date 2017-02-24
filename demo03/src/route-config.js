import Home from './components/Home.vue'
import About from './components/About.vue'
import News from './components/News.vue'
import Message from './components/Message.vue'
import NewsDetail from './components/NewsDetail.vue'

export default {
	'home': {
		component: Home,
		subRoutes: {
			'news': {
				name: 'news', //给该路由指定了name属性
				component: News,
				subRoutes: {
					'detail/:id': {  ///:id是路由参数，例如：如果要查看id = '01'的News详情，那么访问路径是/home/news/detail/01。
						name: 'detail', //给该路由指定了name属性
						component: NewsDetail
					}
				}
			},
			'message': {
				component: Message
			}
		}
	},
	'about': {
		component: About
	}
}