<template>
    <header>
        <nav class="mb-3 navbar navbar-expand navbar-dark bg-success">
            <div class="navbar-nav container-fluid">
                <a class="navbar-brand px-2" href="#">Navbar</a>
                <a class="nav-link" href="#">Home</a>
                <a class="nav-link" href="#">Todo</a>
                <div class="dropdown">
                    <select class="form-select">
                        <option @click="clic(tab)" v-for="tab in tabs" :key="tab">{{ tab }}</option>
                    </select>
                </div>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" />
                    <button class="btn btn-outline-dark" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    data() {
        return {
            activeTab: null,
            tabs: ['Blank', 'Pricing', 'Producto', 'Reviews', 'Todo', ],
        };
    },
    methods: {
        clic(tab) {
            this.$store.commit('change',tab);
        },
    },
};
</script>
