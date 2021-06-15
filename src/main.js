import App from './App.vue'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import 'bootstrap/dist/js/bootstrap.js';
// import 'bootstrap/js/dist/modal.js';
// import * as Modal from 'bootstrap/js/dist/modal.js';
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';
// import Modal from 'bootstrap';


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




