<template>
    <div class="col">
        <br /><br /><br /><br /><br />
        <span class="test">{{ userInput }}</span
        ><br />
        <input ref="input" type="hidden" v-model="userInput" />
        <button @click="copy">Copy input</button>
    </div>
</template>

// <script>
export default {
    data() {
        return {
            userInput: "Testing",
        };
    },
    computed: {},
    methods: {
        copy() {
            let toSelect = this.$refs.input;
            toSelect.setAttribute("type", "text");
            toSelect.focus();
            toSelect.select();
            document.execCommand("copy");
            toSelect.setAttribute("type", "hidden");
        },
    },
};
</script>

<style lang="scss" scoped>
.test {
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: -40px;
        left: 30px;
        height: 30px;
        width: 100px;
        background: mediumaquamarine;
        border: 5px solid mediumaquamarine;
        border-radius: 2px;
        clip-path: polygon(0 20%, 100% 20%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
    }
}
</style>
