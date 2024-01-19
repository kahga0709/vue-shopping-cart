<script setup lang="ts">
import { ref } from 'vue'

const amount = ref<number>(1)

const Increase = () => {
    amount.value++
    emit('increment')
}

const Decrease = () => {
    if (amount.value <= 1) return
    amount.value--
    emit('decrement')
}

const emit = defineEmits(['increment', 'decrement'])

</script>

<template>
    <div class="wrap-stepper">
        <button class="button decrease" @click="Decrease">-</button>
        <span class="amount">{{ amount }} </span>
        <button class="button increase" @click="Increase">+</button>
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