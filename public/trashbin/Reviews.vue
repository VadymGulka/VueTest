<template>
    <div class="row">
        <div class="col-2">
            <ReviewForm @submitReview="addReview"></ReviewForm>
        </div>
        <div class="col">
            <span class="h1">Reviews</span>
            <ul v-for="(review, index) in listReviews" :key="index">
                <li>
                    {{ review.name + " gave this " + review.rating + " stars" }}
                    <p>{{ review.review }}</p>
                    <p v-show="review.rec">Recomended!</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import ReviewForm from "./ReviewForm.vue";

export default {
    components: {
        ReviewForm,
    },
    data() {
        return {
            listReviews: [],
        };
    },
    methods: {
        addReview(review) {
            this.listReviews.push(review);
        },
    },
};
</script>

<style>
</style>