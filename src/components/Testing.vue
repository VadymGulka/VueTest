<template>
    <div class="container">
        <form ref="form">
            <input class="form-control mb-2" placeholder="Name" required />

            <input class="form-control mb-2" placeholder="DB link" required />

            <button type="button" class="btn btn-secondary">Close</button>
            <button @click="test()" type="button" class="btn btn-primary">Save changes</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {},
    methods: {
        test() {
            if (this.$refs.form.checkValidity()) {
                alert("TEST");
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    padding-bottom: 500px;
}
</style>