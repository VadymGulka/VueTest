<template>
    <div>
        <component :is="$store.state.tab"></component>
    </div>
</template>

<script>
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
    },
};
</script>

<style>
</style>