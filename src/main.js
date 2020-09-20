import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js' 
import axios from 'axios'

// 可以使用简写

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
	// 然后在当前实例中注入路由：
	router, 
	render: h => h(App),
}).$mount('#app')

