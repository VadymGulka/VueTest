import App from './App.vue'
import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			tab: localStorage.savedTab,
			info: false,
		}
	},
	mutations: {
		savedTab(s, n) {
			s.tab = n
		},
		savedInfo(s, n) {
			s.info = n
		}
	},
	onMounted() {
		this.state.tab = "Producto"
	}
})

createApp(App).use(store).mount('#app');




