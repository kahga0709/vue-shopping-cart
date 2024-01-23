<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  initialQuantity?: number;
}>();

const quantity = ref<number>(props.initialQuantity ?? 1);

const increase = () => {
  quantity.value++;
  emit("increment", quantity.value);
  emit("quantity", quantity.value);
};

const decrease = () => {
  if (quantity.value <= 1) return;
  quantity.value--;
  emit("decrement", quantity.value);
  emit("quantity", quantity.value);
};

const emit = defineEmits(["increment", "decrement", "quantity"]);
</script>

<template>
  <div class="wrap-stepper">
    <button class="button decrease" @click="decrease">-</button>
    <span class="amount">{{ quantity }} </span>
    <button class="button increase" @click="increase">+</button>
  </div>
</template>

<style scoped>
.button {
  height: 40px;
  width: 30px;
  background-color: #f9f9f9;
  border: 1px solid silver;
}

.amount {
  padding: 0px 15px;
}
</style>
