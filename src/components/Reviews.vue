<template>
    <review-form @submitReview="addReview"></review-form>

    <div class="col-4">
        <span class="h1">Reviews</span>
        <ul v-for="(review, index) in listReviews" :key="index">
            <li>
                {{ review.name + " gave this " + review.rating + " stars" }}
                <p>{{ review.review }}</p>
				<p v-show="review.rec">Recomended!</p>
            </li>
        </ul>
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