import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer';
const { resolve } = require('path');
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), visualizer()],
	server: {
		port: 80
	},
	build: {
		outDir: "docs",
		rollupOptions: {
			input: {
				index: resolve(__dirname, 'index.html'),
				books: resolve(__dirname, 'src/pages/books.html'),
				vue1: resolve(__dirname, 'src/pages/vue.html')
			}
		},

	},

})





