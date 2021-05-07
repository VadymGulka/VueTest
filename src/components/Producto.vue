<template>
    <div class="row">
        <div style="position: relative" class="col">
            <img
                class="img-fluid border border-5"
                height="400"
                :src="curImage.image"
            />
            <div class="imagetext">
                <span class="h1 text-white">{{ curSize.size }}</span>
            </div>
        </div>

        <div class="col">
            <div class="display: inline-block">
                <span class="h1"> {{ product.nombre }}</span>

                <button type="button" class="btn m-2 btn-success float-end">
                    <i class="bi bi-cart"></i>Card ({{ curProducts.length }})
                </button>
            </div>

            <p>{{ product.desc }}</p>
            <table class="table">
                <tr>
                    <td>Inventory</td>
                    <td>{{ product.inventory }}</td>
                    <td>
                        <i
                            v-if="product.inventory >= 100"
                            class="bi bi-check-circle"
                        ></i>
                        <i v-else class="bi bi-exclamation-circle"></i>
                    </td>
                </tr>
                <tr>
                    <td>On sale</td>
                    <td>{{ product.onSale }}</td>
                    <td>
                        <i v-if="product.onSale" class="bi bi-check-circle"></i>
                        <i v-else class="bi bi-exclamation-circle"></i>
                    </td>
                </tr>
                <tr>
                    <td>Descuento</td>
                    <td>{{ product.discount + "%" }}</td>
                    <td>
                        {{
                            "-" + (product.price * product.discount) / 100 + "$"
                        }}
                    </td>
                </tr>
                <tr>
                    <td>Tamaños</td>
                    <td>{{ sizesCount }}</td>
                    <td>
                        <div class="dropdown">
                            <button
                                class="btn"
                                type="button"
                                data-bs-toggle="dropdown"
                            >
                                Ver
                            </button>
                            <ul class="dropdown-menu">
                                <li v-for="size in product.sizes" :key="size">
                                    <a
                                        class="dropdown-item"
                                        @click="setSize(size)"
                                        @mouseover="setSize(size)"
                                        >{{ size.size }}</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Colores</td>
                    <td>{{ product.variants.length }}</td>
                    <td>
                        <div class="dropdown">
                            <button
                                class="btn"
                                type="button"
                                data-bs-toggle="dropdown"
                            >
                                Ver
                            </button>
                            <ul class="dropdown-menu">
                                <li
                                    v-for="variant in product.variants"
                                    :key="variant.id"
                                >
                                    <a
                                        class="dropdown-item"
                                        @mouseover="setImage(variant)"
                                        @click="setImage(variant)"
                                        >{{ variant.color }}</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </table>

            <div>
                <span class="h3">{{ product.price + "$" }}</span>
                <i class="bi bi-chevron-double-right"> </i>
                <span class="h1">{{ descPrice + "$" }}</span>
                <button
                    class="btn btn-success btn-lg float-end"
                    @click="debounceCart"
                >
                    Añadir a las cesta
                </button>
            </div>
        </div>
        <img src="src\assets\banner.jpg" height="300" alt="...test" />
    </div>
</template>



<script>
import _ from "lodash";
import axios from "axios";
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            curImage: null,
            curSize: null,
            curProducts: [],
        };
    },

    computed: {
        descPrice: function () {
            return (
                this.product.price -
                (this.product.price * this.product.discount) / 100
            );
        },
        sizesCount: function () {
            return Object.keys(this.product.sizes).length;
        },
    },

    created() {
        this.responder();
        this.curImage = this.product.variants[0];
        this.curSize = this.product.sizes[0];
        this.debounceCart = _.debounce(this.addCart, 500);
    },

    methods: {
        responder() {
            axios
                .get("https://yesno.wtf/api")
                .then((response) => console.log(response.data.answer))
                .catch((error) => console.log(error));
        },
        setImage(val) {
            this.curImage = val;
        },
        setSize(val) {
            this.curSize = val;
        },
        addCart() {
            let add = [this.curSize.name, this.curImage.color, this.descPrice];
            this.curProducts.push(add);
        },
    },
};
</script>

<style>
.imagetext {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.bi-check-circle,
.bi-exclamation-circle {
    font-size: 2rem;
    color: rgb(15, 180, 9);
}

.bi-chevron-double-right {
    font-size: 1rem;
    color: rgb(240, 8, 8);
}
</style>