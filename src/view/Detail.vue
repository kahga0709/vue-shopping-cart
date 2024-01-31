<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import Card from "../components/Card.vue";
import MButton from "../components/MButton.vue";
import Stepper from "../components/Stepper.vue";
import { formatCurrencyVND } from "../utils/format_currency_vnd";
import { useRoute } from "vue-router";
import { Product } from "../data/items";
import { fetchProductById, addToCartForUser } from "../firebase/service";

const route = useRoute();

const cardRef = ref<any>(null);

let qty: number = 1;

const product = ref<Product>();

onBeforeMount(async () => {
  const productId = route.params.id as string;
  product.value = await fetchProductById(productId);
});

const addToCart = async () => {
  cardRef.value.openCard();

  if (!product.value) return;

  const { id, name, price, description, imageUrl } = product.value;
  const productToAdd = { id, name, price, description, imageUrl, qty };

  await addToCartForUser(productToAdd);
  cardRef.value.onRefresh();
};

const updateQuantity = (newQuantity: number) => {
  qty = newQuantity;
};
</script>
<template>
  <div class="detail-page">
    <div class="image-info">
      <img class="image" :src="`${product?.imageUrl}`" />
    </div>
    <div class="order-info">
      <h1>{{ product?.name }}</h1>
      <p class="price">
        <span class="discount-price"
          >{{ formatCurrencyVND(Number(product?.price)) }}
        </span>
        <span class="code">Mã SP: N/A</span>
      </p>

      <p>
        Converse 1970s là 1 trong những dòng sản phẩm bán chạy nhất của
        Converse.Phần đế màu trắng ngà vintage được phủ 1 lớp bóng bên ngoài là
        điểm nhấn riêng cho dòng 1970s, dễ vệ sinh hơn.
      </p>

      <div class="add-to-cart-row">
        <Stepper
          class="stepper-button"
          v-on:quantity="updateQuantity($event)"
        />
        <MButton class="add-to-cart-button" @click="addToCart" />
      </div>

      <Card ref="cardRef" />
    </div>
  </div>
</template>

<style scoped>
.add-to-cart-row {
  display: flex;
}

.add-to-cart-button {
  margin-left: 10px;
}

.detail-page {
  display: flex;
  height: 100vh;
  background-color: whitesmoke;
}

.image-info {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 20px;
}

.order-info {
  flex: 1;
}

.list-image {
  display: flex;
  flex-flow: column wrap;
}

.image {
  height: 400px;
  width: 400px;
  margin-left: 12px;
}

.image-in-list {
  margin-bottom: 8px;
}

.discount-price {
  color: red;
  font-size: 24px;
  margin-left: 8px;
}

.code {
  color: #707070;
  margin-left: 3rem;
  font-size: 16px;
  font-weight: bold;
}
</style>
