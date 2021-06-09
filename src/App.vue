<template>
    <template v-if="infoStatus">
        d
        <Info></Info>
    </template>
    <component :is="$store.state.tab"></component>
</template>

<script>
import Info from "./components/Info.vue";
import Producto from "./components/Producto.vue";
import Reviews from "./components/Reviews.vue";
import Todo from "./components/ToDo.vue";
import Pricing from "./components/Pricing.vue";
export default {
    components: {
        Producto,
        Reviews,
        Todo,
        Pricing,
        Info,
    },
    computed: {
        infoStatus() {
            return this.$store.state.info;
        },
    },
};
</script>

<style>
</style>