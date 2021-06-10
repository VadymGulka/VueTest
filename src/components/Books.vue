<template>
    <div class="row">
        <template v-for="n in 8" :key="n">
            <div class="card m-4" style="width: 10rem">
                <img src="https://via.placeholder.com/50" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Components</h5>
                    <p class="card-text">Some quick example text to build on the card title</p>
                    <a href="src/pages/vue.html" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style lang="scss">
</style>