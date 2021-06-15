<template>
    <Header></Header>
    <div class="row">
        <div class="col">
            <h1>Number of books: {{ books.length }}</h1>
            <button class="btn btn-danger" @click="RefreshBooksList">Refresh Books</button>
            <AddBookModal></AddBookModal>
        </div>
    </div>
    <div ref="books"></div>
    <div class="row">
        <template v-for="book in books" :key="book.id">
            <div class="card m-4 p-0" style="width: 12rem">
                <img :src="book.image" class="card-img-top" alt="[-image_link-]" />
                <div class="card-body">
                    <h5 class="card-title">{{ book.name }}</h5>
                    <p class="card-text">{{ book.desc }}</p>
                    <a :href="book.dblink" class="btn btn-primary">Book link</a>
                </div>
            </div>
        </template>
    </div>

    <Footer></Footer>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import AddBookModal from "./components/AddBookModal.vue";
export default {
    components: {
        Header,
        Footer,
        AddBookModal,
    },
    data() {
        return {
            books: [],
        };
    },
    mounted() {
        this.RefreshBooksList();
    },
    methods: {
        RefreshBooksList() {
            this.books = [];
            this.$refs.books.classList.add("loader");
            this.GetBooksJson().then((data) => {
                this.$refs.books.classList.remove("loader");
                this.books = data;
            });
        },
        async GetBooksJson() {
            const response = await fetch(
                "https://booksal-2ceb1-default-rtdb.europe-west1.firebasedatabase.app/Books.json?print=pretty",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return response.json();
        },
    },
};
</script>

<style lang="scss" scoped>
.loader {
    position: relative;
    margin: auto;
    margin-top: 100px;
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 60%;
    width: 200px;
    height: 200px;
    animation: spin 2s linear infinite;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>