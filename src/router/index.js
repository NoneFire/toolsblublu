import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
	{
		path: '/csvcut',
		name: 'CsvCut',
		component: () => import('@/views/CsvCut')
	},
	{
		path:'/mesboard',
		name:'/MesBoard',
		component:() => import('@/views/MesBoard')
	},
	{
		path:'/',
		name:'/HomePage',
		component:() => import('@/views/HomePage')
	},
	{
		path:'/maclearn',
		name:'/MacLearn',
		component:() => import('@/views/MacLearn')
	}
]

const router = new Router({
	mode:'history',
	routes
})


export default router