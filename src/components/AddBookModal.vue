<template>
    <!-- Button trigger modal -->
    <button @click="showModal()" type="button" class="btn btn-primary">Add new book</button>
    <!-- Modal -->
    <div ref="modal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Add new book</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <span class="h5 text-muted">Book data</span>
                    <div class="row">
                        <div class="col-2 ml-2 col-form-label">ID:</div>
                        <div class="col">
                            <input :value="bookId" disabled class="form-control mb-2" />
                        </div>
                    </div>
                    <form ref="form">
                        <input
                            v-model="AddBookData.name"
                            class="form-control mb-2"
                            placeholder="Name"
                            required
                        />
                        <input
                            v-model="AddBookData.desc"
                            class="form-control mb-2"
                            placeholder="Description"
                            required
                        />
                        <input v-model="AddBookData.dblink" class="form-control mb-2" placeholder="DB link" />
                        <div class="row m-0">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Image</label>
                            <input class="form-control col mb-2" type="file" id="formFile" />
                            <input
                                v-model="AddBookData.image"
                                class="form-control mb-2"
                                placeholder="Image link"
                                required
                            />
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary">Close</button>
                            <button type="button" @click="AddBook()" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as bootstrap from "../../node_modules/bootstrap/dist/js/bootstrap.js";
export default {
    props: {
        bookId: {
            type: Number,
            default: 1000,
        },
    },
    emits: ["RefreshBooksList"],
    data() {
        return {
            exampleModal: false,
            AddBookData: {
                name: "Book3",
                type: "Regular",
                desc: "Book3Desc",
                image: "https://via.placeholder.com/250",
                dblink: "Book3Link",
                author: "BookAuthor",
                artist: "BookArtist",
                magazine: "BookMag",
                year: 2021,
                readon: 2021,
            },
        };
    },
    mounted() {},
    methods: {
        showModal() {
            var modal = new bootstrap.Modal(this.$refs.modal, {
                backdrop: "static",
            });
        },
        AddBook() {
            console.log(this.$refs.form.checkValidity());
            // if (this.$refs.form.checkValidity()) {
            //     this.AddBookDB();
            //     setTimeout(function () {
            //         this.$emit("RefreshBooksList");
            //     }, 200);
            // }
        },
        async AddBookDB() {
            // console.log('{"' + this.bookId + '":' + JSON.stringify(this.AddBookData) + "}"); //Submited Book Data
            await fetch("https://booksal-2ceb1-default-rtdb.europe-west1.firebasedatabase.app/Books.json", {
                body: '{"' + this.bookId + '":' + JSON.stringify(this.AddBookData) + "}",
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