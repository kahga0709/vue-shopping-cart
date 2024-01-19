<template>
    <h1>GIỎ HÀNG</h1>
    <div v-for="(data, index) in injectedData" :key="index" class="item">
        <button class="delete-button" @click="deleteItem()">delete</button>
        <img src="https://conversestore.vn/wp-content/uploads/2023/12/z4852163053846_61ebc9961cc589d0f1af057b9d980091.jpg"
            height="50px" width="50px">
        <p class="name">{{ data.name }}</p>
        <p class="price">{{ data.price }}</p>
        <Stepper class="stepper" />
        <p class="temp-price">3.900.000₫</p>
    </div>
</template>

<script setup lang="ts">

import { inject } from 'vue';
import Stepper from '../components/Stepper.vue';

const injectedData = inject<any>('dataKey');

const deleteItem = () => {
    inject('dataKey', injectedData.pop())
    console.log(injectedData.length);
}

</script>

<style scoped>
.screen {
    height: 100vh;
    background-color: wheat;
}

h1 {
    text-align: center;
    padding: 20px;
    color: whitesmoke;
    background-color: black;
}

.item {
    display: flex;
    background-color: whitesmoke;
    padding: 12px;
    margin: 8px;
}

.delete-button {
    height: 30px;
    margin: 0px 8px;
}

.temp-price {
    margin-left: 20px;
}

.stepper {
    margin-left: 20px;
}

.price {
    margin-left: 100px;
}
</style>


