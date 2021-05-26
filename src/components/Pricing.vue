<template>
    <div class="container text-center">
        <div id="divcircles" class="row py-5">
            <h1>Simple, traffic-based pricing</h1>
            <p class="text-muted">Sign-up for our 30-day trial.</p>
            <p class="text-muted">No credit card required.</p>

            <svg id="circles" width="146" height="145">
                <g fill="none" fill-rule="evenodd" stroke="#CFD8EF">
                    <circle cx="63" cy="82" r="62.5"></circle>
                    <circle cx="105" cy="41" r="40.5"></circle>
                </g>
            </svg>
        </div>

        <div class="row bg-light">
            <p class="text-muted fs-5 p-4">{{ pageviews }} PAGEVIEWS</p>
            <input v-model="price" type="range" min="0" max="500" class="form-range px-5" />
            <div class="p-4">
                <p class="text-align-center">
                    <span class="align-middle fs-1">${{ curPrice }}</span
                    >/month
                </p>
                <div class="pt-5">
                    <span class="align-bottom text-muted fs-3">Monthly Billing</span>
                    <label class="switch">
                        <input v-model="yearly" type="checkbox" />
                        <span class="slider"></span>
                    </label>
                    <span class="align-bottom text-muted fs-3">Yearly Billing</span>
                    <span class="align-bottom discount mx-2 px-2 fs-6">-25%</span>
                </div>
            </div>
        </div>
        <div class="row pt-5">
            <ul>
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email report</li>
                <button @click="stroke" class="mt-4 btn btn-lg btn-dark btn-outline-light">
                    Start my trial
                </button>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            price: 250,
            yearly: null,
        };
    },

    computed: {
        curPrice() {
            if (this.yearly) {
                return Math.round(this.price * 0.75);
            } else {
                return Math.round(this.price);
            }
        },
        pageviews() {
            return this.price * 1000;
        },
    },
};
</script>

<style>

#divcircles {
	position: relative;
}
#circles {
	position: absolute;
	z-index: -1;
	left: 70%;
}

.discount {
    background-color: #feece7;
    color: #ff9d7d;
    border-radius: 33% 33% 33% 33%;
}
.btn {
    border-radius: 33% 33% 33% 33%;
}
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}
.slider {
    border-radius: 34px;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider::before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}
input:checked + .slider {
    background-color: #10d5c2;
}

input:focus + .slider {
    box-shadow: 0 0 1px aquamarine;
}
input:checked + .slider::before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}
input[type="range"]::-moz-range-track {
    height: 15px;
}
</style>

