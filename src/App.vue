<template>
    <Producto :product="product"></Producto>
</template>

<script>
import Producto from "./components/Producto.vue";
export default {
    components: {
        Producto,
    },
    data() {
        return {
            product: {
                nombre: "Ocean banner",
                desc: "400 pixels ocean banner",
                inventory: 10,
                onSale: true,
                discount: 40,
                price: 60,
                sizes: [
                    { name: "S", size: "30*20" },
                    { name: "M", size: "50*40" },
                    { name: "XL", size: "60*75" },
                ],
                variants: [
                    { color: "Dark", image: "./src/assets/ocean1.jpg" },
                    { color: "White", image: "./src/assets/ocean2.jpg" },
                ],
            },
        };
    },
};
</script>

<style>
</style>