import App from '../components/App.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
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


createApp(Header).use(store).mount('#header');
createApp(App).use(store).mount('#app');
createApp(Footer).mount('#footer')






