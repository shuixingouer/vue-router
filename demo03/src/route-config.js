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
				name: 'news', //����·��ָ����name����
				component: News,
				subRoutes: {
					'detail/:id': {  ///:id��·�ɲ��������磺���Ҫ�鿴id = '01'��News���飬��ô����·����/home/news/detail/01��
						name: 'detail', //����·��ָ����name����
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