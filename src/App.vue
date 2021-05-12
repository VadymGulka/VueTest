<template>
    <Header></Header>
    <div>
        <span v-for="tab in tabs" :key="tab">
            <button @click="curTab = tab">{{ tab }}</button></span
        >
        <keep-alive>
            <component :is="curTab"></component>
        </keep-alive>
    </div>
    <Footer></Footer>
</template>

<script>
import Producto from "./components/Producto.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Reviews from "./components/Reviews.vue";
import Todo from "./components/ToDo.vue";
export default {
    components: {
        Producto,
        Header,
        Footer,
        Reviews,
        Todo,
    },
    data() {
        return {
            curTab: null,
            tabs: ["Producto", "Reviews", "Todo"],
        };
    },
};
</script>

<style>
</style>