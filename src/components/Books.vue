<template>
    <!-- TODO Config cards -->
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
            <button class="btn btn-success" @click="AddBookJson">Add Books</button><br />
            <button class="btn btn-info" @click="GetBooksJson">Test Fetch</button><br />
            <table v-for="i in books" :key="i.id">
                <td>
                    {{ i.id }}
                </td>
                <td>
                    {{ i.name }}
                </td>
            </table>
            <h1>Number of books: {{ CountBooks }}</h1>
            <div v-for="n in input" :key="n.index">
                <input v-model="input[n]" type="text" />{{ n }}-----------
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: [{ name: null }, { desc: null }, { url: null }, { link: null }],
            books: [],
            Xkey: "$2b$10$3aiaGzTJFQJ.9Xq1HB98luhpa0k0ymDBDcK9/yZG3xTEaNoW7geJy",
        };
    },
    computed: {
        CountBooks() {
            return this.books.length;
        },
    },
    mounted() {
        GetBooksJson().then((data) => {
            data.record.forEach((element) => {
                this.books.push(element);
            });
        });
    },
    methods: {
        //this.books.push(new bookCreator());
        async AddBookJson() {
            console.log("POST book");
            const response = await fetch("https://api.jsonbin.io/v3/b/60c316a4b274176a77e50bce", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "X-Master-Key": this.Xkey,
                    // "X-Bin-Versioning": true,
                },
                body: JSON.stringify(this.books),
            });
        },
    },
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function GetBooksJson() {
    console.log("GET books");
    const response = await fetch("https://api.jsonbin.io/v3/b/60c316a4b274176a77e50bce/latest", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Master-key": "$2b$10$3aiaGzTJFQJ.9Xq1HB98luhpa0k0ymDBDcK9/yZG3xTEaNoW7geJy",
        },
    });
    return response.json();
}
function bookCreator(id, name, desc, url, link) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.imageUrl = url;
    this.link = link;
}
//TODO Form with "x-key" to add book
//TODO Fetch json with books info
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