import App from './App.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Info from './components/Info.vue'
import { createApp } from 'vue'
import { createStore } from 'vuex'


const store = createStore({
	state() {
		return {
			tab: localStorage.savedTab
		}
	},
	mutations: {
		change(state, n) {
			state.tab = n
		}
	},
	onMounted(){
		this.state.tab = "Producto"
	}
})


createApp(Header).use(store).mount('#header');
createApp(Info).use(store).mount('#info');
createApp(App).use(store).mount('#app');
createApp(Footer).mount('#footer')






