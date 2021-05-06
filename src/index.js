//import _ from 'lodash';
//import axios from 'axios';
//import Vue from 'Vue/dist/vue.esm-browser';
//import * as Vue from "Vue/dist/vue.esm-browser";
import { createApp } from 'vue'
//import App from './components/App.vue's

const datos = {
    data() {
        return {
            curImage: null,
            curSize: null,
            curProducts: [],
            product: {
                nombre: 'Ocean banner',
                desc: '400 pixels ocean banner',
                inventory: 100,
                onSale: true,
                discount: 40,
                price: 160,
                sizes: [
                    { name: "S", size: "30*20", },
                    { name: "M", size: "50*40", },
                    { name: "XL", size: "60*420", }
                ],
                variants: [
                    { color: 'Dark', image: './src/assets/ocean1.jpg' },
                    { color: 'White', image: './src/assets/ocean2.jpg' }
                ],
            }
        }
    },
    created() {
        this.curImage = this.product.variants[0]
        this.curSize = this.product.sizes[0]
    },
    computed: {
        descPrice: function () {
            return this.product.price - (this.product.price * this.product.discount / 100)
        },
        sizesCount: function () {
            return Object.keys(this.product.sizes).length
        }

    },
    methods: {
        setImage(val) {
            this.curImage = val
        },
        setSize(val) {
            this.curSize = val
        },
        addCart() {
            let add = [this.curSize.name, this.curImage.color, this.descPrice]
            this.curProducts.push(add)
        }
    }
}



// const app = createApp(datos)

// app.mount('#base')
createApp(datos).mount('#base')


//createApp(App).mount('#root')








//     watch: {
//         pregunta(preguntaNEW) {
//             if (preguntaNEW.indexOf('?') > -1) {
                // this.responder()
//             }
//         }
//     },
//     computed: {
//         numeroSort(){
//             return this.numeros.filter(numero => numero % 2 == 0)
//         },

//     methods: {
//         responder() {
//             this.respuesta = "Pensando..."
//             axios
//                 .get('https://yesno.wtf/api')
//                 .then(response => {
//                     this.respuesta = response.data.answer
//                 })
//                 .catch(function (error) {
//                     console.log(error)
//                 })
//         }
//     }
// }






//     created() {
//         this.debounceClick = _.debounce(this.click, 500);
//         this.debounceDrag = _.debounce(this.getDate, 500);
//     },
//     computed: {
//         hasBooks() {
//             if (this.author.books.length > 0) {
//                 return "Has books"
//             }
//         }
//     },
//     methods: {
//         getDate() {
//             this.dia = new Date().toLocaleDateString();
//         },

//         click() {
//             this.numero++
//             console.log("Clicked " + this.numero)
//         }
//     },
//     unmounted() {
//         this.debounceClick.cancel()
//     }
// }


// const app = Vue.createApp(datos);
// app.mount('#base');










































// const contador = {
//     data() {
//         return {
//             reverse: 'Escribe aqui',
//             contador: 0,
//             message: '',
//             diahoy: '',
//             listado: ['elemento1', 'elemento2', 'elemento3', 'elemento4', 'elemento5']
//         }
//     },
//     mounted() {
//         setInterval(() => {
//             this.contador++
//             this.message = new Date().getHours()
//         }, 1000000)
//     },
//     methods: {
//         verdiahoy() {
//             this.diahoy = new Date().toLocaleDateString()
//         },
//         see() {
//             if (this.reverse == "true") {
//                 return true
//             }
//         }
//     }
// }
// Vue.createApp(contador).mount('#contadorID');
// const TodoList = {
//     data() {
//         return {
//             groceryList: [
//                 { id: 0, text: 'Vegetables' },
//                 { id: 1, text: 'Cheese' },
//                 { id: 2, text: 'Whatever else humans are supposed to eat' }
//             ]
//         }
//     }
// }

// const app = Vue.createApp(TodoList);


// app.component('todo-item', {
//     props: ['todo'],
//     template: `<li>{{ todo.text }}</li>`
// })

// app.mount('#base');










