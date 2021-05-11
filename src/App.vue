<template>
    <Header></Header>

    <Producto :product="product"></Producto>
    <div class="row"><Reviews></Reviews></div>

    <Footer></Footer>
</template>

<script>
import Producto from "./components/Producto.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Reviews from "./components/Reviews.vue";
export default {
    components: {
        Producto,
        Header,
        Footer,
        Reviews,
    },
    data() {
        return {
            product: {
                nombre: "Ocean banner",
                desc: "400 pixels ocean banner",
                discount: 40,
                sizes: [
                    { name: "S", size: "30*20" },
                    { name: "M", size: "50*40" },
                    { name: "XL", size: "60*75" },
                ],
                variants: [
                    {
                        id: 152,
                        color: "Dark",
                        image: "./src/assets/ocean1.jpg",
                        price: 60,
                        onSale: true,
                        inventory: 100,
                    },
                    {
                        id: 64,
                        color: "White",
                        image: "./src/assets/ocean2.jpg",
                        price: 80,
                        onSale: false,
                        inventory: 30,
                    },
                    {
                        id: 91,
                        color: "Red",
                        image: null,
                        price: 96,
                        onSale: false,
                        inventory: 0,
                    },
                ],
            },
        };
    },
};
</script>

<style>
</style>