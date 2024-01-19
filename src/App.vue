<script setup lang="ts">
import MainHeader from './components/MainHeader.vue';
import { provide } from 'vue';

const dataToProvide = [
  {
    id: 1,
    name: "product 1",
    price: 1000000,
    amount: 2,
  }
];

provide('dataKey', dataToProvide);
</script>

<template>
  <MainHeader />
  <router-view />
</template>

<style scoped></style>
