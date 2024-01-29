<script setup lang="ts">
import { formatCurrencyVND } from "../utils/format_currency_vnd";

defineProps<{
  image: string;
  name: string;
  price: number;
}>();

const emit = defineEmits(["onClick"]);
</script>

<template>
  <div class="product-card" @click="emit('onClick')">
    <img class="image" :src="`${image}`" alt="Product" />
    <div class="name">{{ name }}</div>
    <div class="price">{{ formatCurrencyVND(price) }}</div>
  </div>
</template>

<style scoped>
.product-card {
  width: 220px;
  margin: 10px;
  height: 300px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.name {
  color: #0a413e;
  font-size: 20px;
}

.product-card:hover {
  border: 1px solid #0a413e;
}

.image {
  width: 150px;
  height: 150px;
}

.name {
  padding: 0px;
  margin: 5px 10px;
}

.price {
  padding: 0px;
  margin: 5px 10px;
}

.name:hover {
  color: #0a413e;
}

.price:hover {
  color: #0a413e;
}

.price {
  color: red;
  font-size: 24px;
  margin-left: 8px;
}
</style>
