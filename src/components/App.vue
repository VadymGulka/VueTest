<template>
    <template v-if="infoStatus">
        d
        <Info></Info>
    </template>
    <component :is="$store.state.tab"></component>
</template>

<script>
import Info from "./Info.vue";
import Producto from "./Producto.vue";
import Reviews from "./Reviews.vue";
import Todo from "./ToDo.vue";
import Pricing from "./Pricing.vue";
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