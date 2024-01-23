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
  <div class="container" @click="emit('onClick')">
    <img class="image" :src="`${image}`" alt="Product" />
    <div class="name">{{ name }}</div>
    <div class="price">{{ formatCurrencyVND(price) }}</div>
  </div>
</template>

<style scoped>
.container {
  height: 300px;
  width: 220px;
  margin: 10px;
}

.image {
  width: 100%;
  height: 70%;
}

.container .name,
.container .price {
  padding: 4px 4px;
}

.name {
  font-weight: bold;
}

.price {
  color: red;
  font-size: 20px;
  font-weight: 800;
}
</style>
