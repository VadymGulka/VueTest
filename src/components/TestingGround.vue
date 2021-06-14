<template>
    <!-- Button trigger modal -->
    <MDBBtn color="primary" @click="exampleModal = true">Launch demo modal</MDBBtn>

    <MDBModal v-model="exampleModal" staticBackdrop centered size="sm">
        <MDBModalBody>
            <div class="col">
                <span class="h3">Add new book</span>
                <input v-model="AddBookData.name" class="form-control mb-2" placeholder="Name" />
                <input v-model="AddBookData.desc" class="form-control mb-2" placeholder="Description" />
                <input v-model="AddBookData.image" class="form-control mb-2" placeholder="Image link" />
                <input v-model="AddBookData.dblink" class="form-control mb-2" placeholder="DB link" /></div
        ></MDBModalBody>
        <MDBModalFooter>
            <MDBBtn color="secondary" @click="exampleModal = false">Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
    </MDBModal>
    <button class="btn" @click="AddBookJson">Add</button>
</template>

<script>
import { MDBModal, MDBModalBody, MDBModalFooter, MDBBtn } from "mdb-vue-ui-kit";

export default {
    components: {
        MDBModal,
        MDBModalBody,
        MDBModalFooter,
        MDBBtn,
    },
    data() {
        return {
            exampleModal: false,
            AddBookData: {
                name: null,
                desc: null,
                image: null,
                dblink: null,
            },
        };
    },
    methods: {
        async AddBookJson() {
            console.log("POST book");
            await fetch("https://booksal-2ceb1-default-rtdb.europe-west1.firebasedatabase.app/Books.json", {
                body: '{"user_id" : "jack345", "text" : "A345hoy!"}',
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        },
    },
};
</script>

<style>
</style>