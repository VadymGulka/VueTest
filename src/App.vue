<template>
    <Header></Header>
    <!-- <Testing></Testing> -->
    <div class="row">
        <div class="col">
            <h1>Number of books: {{ books.length }}</h1>
            <button class="btn btn-danger" @click="RefreshBooksList">Refresh Books</button>
            <AddBookModal @RefreshBooksList="RefreshBooksList()" :bookId="books.length"></AddBookModal>
        </div>
    </div>
    <div ref="loader"></div>
    <div class="row m-1">
        <template v-for="book in books" :key="book.id">
            <div class="card m-2 p-0 border-dark">
                <img :src="book.image" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Book{{ book.name }}</h5>
                    <footer class="blockquote-footer">Book author</footer>
                    <p class="card-text">{{ book.desc }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Book Type</li>
                    <li class="list-group-item">Year realesedy</li>
                </ul>
                <div class="card-body">
                    <i class="bi bi-book"></i>
                    <a :href="book.dblink" role="button" class="card-link btn btn-info">Book link</a>
                    <i class="bi bi-book"></i>
                    <a :href="book.dblink" role="button" class="btn btn-info card-link border-r">Book link</a>
                    <details>
                        <summary>Epcot Center</summary>
                        <p>
                            Epcot is a theme park at Walt Disney World Resort featuring exciting attractions.
                        </p>
                    </details>
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
import Testing from "./components/Testing.vue";
export default {
    components: {
        Header,
        Footer,
        AddBookModal,
        // eslint-disable-next-line
        Testing,
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
            this.$refs.loader.classList.add("loader");
            this.GetBooksJson().then((data) => {
                this.$refs.loader.classList.remove("loader");
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
.card {
    width: auto;
}
.card-img-top {
    height: 200px;
    // width: 50% % 22;
    object-fit: cover;
}
</style>