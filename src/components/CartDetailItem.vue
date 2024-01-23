<script setup lang="ts">
import Stepper from "./Stepper.vue";
import { formatCurrencyVND } from "../utils/format_currency_vnd";

const emit = defineEmits(["remove", "increaseQty", "decreaseQty"]);

defineProps<{
  name: string;
  price: number;
  image: string;
  totalPrice: number;
  initQty: number;
}>();
</script>

<template>
  <div class="container">
    <button class="delete-button" @click="emit('remove')">Delete</button>
    <img src="" alt="" class="image" />
    <div class="name">{{ name }}</div>
    <div class="price">{{ formatCurrencyVND(price) }}</div>
    <Stepper />
    <div class="total-price">{{ formatCurrencyVND(totalPrice) }}</div>
  </div>
</template>

<style scoped></style>
