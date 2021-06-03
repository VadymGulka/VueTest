<template>
    <div class="row">
        <!-- <input type="text" v-model="userInput" />
        <h3>{{ response }}</h3> -->
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            userInput: "VadymGulka",
            response: "null",
        };
    },
    watch: {
        async userInput(newInput) {
            const response = await fetch(`https://api.github.com/users/${newInput}`);
            const usuario = await response.json();
            this.response = usuario;
        },
    },
    // watch: {
    //     async userRoles(newRoles) {
    //         const query = JSON.stringify(newRoles);
    //         const response = await fetch(`https://reqres.in/api/users?roles=${query}`);
    //         const { data: users } = await response.json();
    //         this.users = users;
    //     },
    // },
    methods: {
        async usuario(username) {
            let user = await axios.get(`https://api.github.com/users/${username}`);
            this.response = JSON.stringify(user.data.login);
        },
    },
};
</script>
<style lang="sass" scoped>
</style>
