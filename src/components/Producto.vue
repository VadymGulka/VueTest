<template>
    <div class="p-2 row border">
        <div style="position: relative" class="col">
            <template v-if="style.image">
                <span class="h1 imagetext text-white">{{ size.size }}</span>
                <img alt="Image placeholser" class="img-fluid border border-5" :src="style.image" />
            </template>
            <template v-else>
                <figure>
                    <img
                        alt="Image placeholser"
                        class="img-fluid border border-5"
                        src="http://placekitten.com/g/320/220"
                    />
                    <figcaption>Out of stock</figcaption>
                </figure>
            </template>
        </div>

        <div class="col">
            <div class="display: inline-block">
                <span class="h1">{{ product.nombre }}</span>

                <button type="button" class="btn m-2 btn-success float-end">
                    <i class="bi bi-cart"></i>
                    Card ({{ curProducts.length }})
                </button>
            </div>
            <p>
                {{ product.desc }}
            </p>

            <table class="table">
                <tr>
                    <th>Inventory</th>
                    <td>
                        {{ style.inventory }}
                    </td>
                    <td>
                        <i v-if="style.inventory >= 100" class="bi bi-check-circle"></i>
                        <i v-else class="bi bi-exclamation-circle"></i>
                    </td>
                </tr>

                <tr>
                    <th>On sale</th>
                    <td>
                        {{ style.onSale }}
                    </td>
                    <td>
                        <i v-if="style.onSale" class="bi bi-check-circle"></i>
                        <i v-else class="bi bi-exclamation-circle"></i>
                    </td>
                </tr>
                <tr>
                    <th>Descuento</th>
                    <td>
                        {{ product.discount + "%" }}
                    </td>
                    <td>
                        {{ "-" + (style.price * product.discount) / 100 + "$" }}
                    </td>
                </tr>
                <tr>
                    <th>Tamaños</th>
                    <td>
                        {{ sizesCount }}
                    </td>
                    <td>
                        <select v-model="size">
                            <option v-for="curSize in product.sizes" :value="curSize" :key="curSize">
                                {{ curSize.size }}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>Estilos</th>
                    <td>
                        {{ product.styles.length }}
                    </td>
                    <td>
                        <select v-model="style">
                            <option v-for="color in product.styles" :value="color" :key="color">
                                {{ color.color }}
                            </option>
                        </select>
                    </td>
                </tr>
            </table>

            <div>
                <span class="h3">{{ style.price + "$" }}</span>
                <button class="btn btn-success btn-lg float-end" @click="debounceCart">
                    Añadir a las cesta
                </button>
            </div>
        </div>
    </div>
</template>



<script>
import _ from "lodash";
export default {
    data() {
        return {
            size: null,
            style: null,
            product: {
                nombre: "Ocean banner",
                desc: "400 pixels ocean banner",
                discount: 40,
                sizes: [
                    {
                        name: "S",
                        size: "30*20",
                    },
                    {
                        name: "M",
                        size: "50*40",
                    },
                    {
                        name: "XL",
                        size: "60*75",
                    },
                ],
                styles: [
                    {
                        id: 152,
                        color: "Dark",
                        image: "./src/assets/ocean1.jpg",
                        price: 60,
                        onSale: true,
                        inventory: 100,
                    },
                    {
                        id: 64,
                        color: "White",
                        image: "./src/assets/ocean2.jpg",
                        price: 80,
                        onSale: false,
                        inventory: 30,
                    },
                    {
                        id: 91,
                        color: "Red",
                        image: null,
                        price: 96,
                        onSale: false,
                        inventory: 0,
                    },
                ],
            },
            curProducts: [],
        };
    },

    computed: {
        descPrice: function () {
            return this.product.price - (this.product.price * this.product.discount) / 100;
        },
        sizesCount: function () {
            return Object.keys(this.product.sizes).length;
        },
    },

    created() {
        this.style = this.product.styles[0];
        this.size = this.product.sizes[0];
        this.debounceCart = _.debounce(this.addCart, 500);
    },

    methods: {
        addCart() {
            this.curProducts.push({
                variantID: this.style.id,
                size: this.style.name,
            });
        },
    },
};
</script>




<style lang="sass" scoped>
.imagetext
	position: absolute
	top: 30%
	left: 50%
	transform: translate(-50%, -50%)

.bi-check-circle,
.bi-exclamation-circle
	font-size: 2rem
	color: rgb(15, 180, 9)

.bi-chevron-double-right
	font-size: 1rem
	color: rgb(240, 8, 8)
</style>