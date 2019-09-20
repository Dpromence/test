import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: '',
			component: resolve => require(['@/components/goods/goods'], resolve),
			meta: {
				title: '探街——商品详情'
			},
		}
	],
	mode: 'history'
})