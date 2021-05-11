<template>
    <div class="row">
        <div style="position: relative" class="col">
            <img
                alt="Image placeholser"
                class="img-fluid border border-5"
                :src="curVariant.image"
            />

            <span class="h1 imagetext text-white">{{ curSize.size }}</span>
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
                    <th>Inventory</th>
                    <td>{{ curVariant.inventory }}</td>
                    <td>
                        <i
                            v-if="curVariant.inventory >= 100"
                            class="bi bi-check-circle"
                        ></i>
                        <i v-else class="bi bi-exclamation-circle"></i>
                    </td>
                </tr>

                <tr>
                    <th>On sale</th>
                    <td>{{ curVariant.onSale }}</td>
                    <td>
                        <i
                            v-if="curVariant.onSale"
                            class="bi bi-check-circle"
                        ></i>
                        <i v-else class="bi bi-exclamation-circle"></i>
                    </td>
                </tr>
                <tr>
                    <th>Descuento</th>
                    <td>{{ product.discount + "%" }}</td>
                    <td>
                        {{
                            "-" +
                            (curVariant.price * product.discount) / 100 +
                            "$"
                        }}
                    </td>
                </tr>
                <tr>
                    <th>Tamaños</th>
                    <td>{{ sizesCount }}</td>
                    <td>
                        <div class="dropdown">
                            <button
                                class="btn btn-sm"
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
                    <th>Estilos</th>
                    <td>{{ product.variants.length }}</td>
                    <td>
                        <div class="dropdown">
                            <button
                                class="btn btn-sm"
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
                                        @mouseover="setVariant(variant)"
                                        @click="setVariant(variant)"
                                        >{{ variant.color }}</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </table>

            <div>
                <span class="h3">{{ curVariant.price + "$" }}</span>
                <button
                    class="btn btn-success btn-lg float-end"
                    @click="debounceCart"
                >
                    Añadir a las cesta
                </button>
            </div>
        </div>
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
            curVariant: {},
            curSize: null,
            curProducts: [],
            curImage: this.product.variants[0].image,
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
        this.curVariant = this.product.variants[0];
        this.curSize = this.product.sizes[0];
        this.debounceCart = _.debounce(this.addCart, 500);
    },

    methods: {
        setSize(val) {
            this.curSize = val;
        },
        addCart() {
            this.curProducts.push({
                variantID: this.curVariant.id,
                size: this.curSize.name,
            });
        },
        setVariant(variant) {
            this.curVariant = variant;
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