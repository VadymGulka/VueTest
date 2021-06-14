<template>
    <form @submit.prevent="onSubmit">
        <p>Leave a review</p>
        Name:
        <input v-model="name" class="form-control" type="text" />
        <p>
            Review:<textarea v-model="review" class="form-control"></textarea>
        </p>

        <p>
            Rating:<select v-model.number="rating" class="form-select">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
        </p>
        <p>
            Recomended?<input
                v-model.number="rec"
                class="form-checkbox"
                type="checkbox"
            />
        </p>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    emits: ["submitReview"],
    data() {
        return {
            name: "",
            review: ``,
            rating: null,
            rec: null,
        };
    },
    methods: {
        onSubmit() {
            if (
                this.name === "" ||
                this.review === "" ||
                this.rating === null
            ) {
                alert("Review is incomplete. Please fill out every field.");
                return;
            }
            let reviewData = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                rec: this.rec,
            };
            this.$emit("submitReview", reviewData);
            // this.name = "";
            // this.review = "";
            // this.rating = null;
        },
    },
};
</script>

<style>
</style>