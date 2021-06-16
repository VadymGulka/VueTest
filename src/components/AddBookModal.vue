<template>
    <!-- Button trigger modal -->
    <button
        @click="FindBookId"
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
    >
        Add new book
    </button>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <span class="h3">Add new book</span>
                    <input v-model="AddBookData.name" class="form-control mb-2" placeholder="Name" />
                    <input v-model="AddBookData.desc" class="form-control mb-2" placeholder="Description" />
                    <input v-model="AddBookData.image" class="form-control mb-2" placeholder="Image link" />
                    <input v-model="AddBookData.dblink" class="form-control mb-2" placeholder="DB link" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" @click="AddBookDB" class="btn btn-primary" data-bs-dismiss="modal">
                        Save changes1
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            exampleModal: false,
            AddBookData: {
                name: "Book3",
                desc: "Book3Desc",
                image: "https://via.placeholder.com/250",
                dblink: "Book3Link",
                author: "BookAuthor",
                artist: "BookArtist",
            },
            BookId: null,
        };
    },
    methods: {
        async FindBookId() {
            await fetch("https://booksal-2ceb1-default-rtdb.europe-west1.firebasedatabase.app/Books.json", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => (this.BookId = data.length));
        },
        async AddBookDB() {
            await fetch("https://booksal-2ceb1-default-rtdb.europe-west1.firebasedatabase.app/Books.json", {
                body: '{"' + this.BookId + '":' + JSON.stringify(this.AddBookData) + "}",
                headers: {
                    "Content-Type": "application/json",
                },
                method: "PATCH",
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        },
    },
};
</script>

<style>
</style>