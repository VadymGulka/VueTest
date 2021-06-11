<template>
    <div class="row">
        <template v-for="n in 0" :key="n">
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
    <div class="row">
        <div class="col">
            <button class="btn btn-info" @click="req">Test Fetch</button><br />
            <textarea v-model="response">d</textarea>
        </div>
    </div>
</template>

<script>
let startId = 1;
class bookCreator {
    constructor(name, desc, url, link) {
        this.id = startId;
        this.name = name;
        this.desc = desc;
        this.imageUrl = url;
        this.link = link;
        startId++;
    }
}

export default {
    data() {
        return {
            response: "null",
            books: [],
        };
    },
    created() {
        this.books.push(new bookCreator("testbook", "testdesc", "testurl", "testlink"));
    },
    methods: {
        async req() {
            console.log("Requested...");
            const response = await fetch("https://api.jsonbin.io/b/60c316a4b274176a77e50bce/latest", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "secret-key": "$2b$10$3aiaGzTJFQJ.9Xq1HB98luhpa0k0ymDBDcK9/yZG3xTEaNoW7geJy",
                },
            });
            response.json().then((data) => console.log(data));
        },
    },
};

// Example POST method implementation:
// async function postData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         mode: "cors", // no-cors, *cors, same-origin
//         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: "same-origin", // include, *same-origin, omit
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: "follow", // manual, *follow, error
//         referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// }

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
// });
</script>

<style lang="scss">
</style>