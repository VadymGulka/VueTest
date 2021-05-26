import App from './App.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
	state() {
		return {
			tab: "Pricing"
		}
	},
	mutations: {
		change(state, n) {
			state.tab = n
		}
	}
})


createApp(Header).use(store).mount('#header');
createApp(App).use(store).mount('#app');
createApp(Footer).mount('#footer')






