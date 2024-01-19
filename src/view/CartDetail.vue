<script setup lang="ts">
import { ref } from 'vue';
import Stepper from '../components/Stepper.vue';
import store from '../store/store';

const cart = ref<any[]>(store.state.cart)

const addToCart = (item: any) => {
    store.commit('addToCart', {
        id: item.id,
        name: item.name,
        price: item.price,
        description: item.description,
        image: item.image,
    })
}

const removeFromCart = (item: any) => {
    store.commit('removeFromCart', {
        id: item.id,
    })
}

const remove = (index: number) => {
    store.commit('remove', index)
}

</script>

<template>
    <h1>GIỎ HÀNG</h1>
    <div v-for="(item, index) in cart" :key="index" class="item">
        <button class="delete-button" @click="remove(index)">delete</button>
        <img :src="`${item.image}`" height="50px" width="50px">
        <p class="name">{{ item.name }}</p>
        <p class="price">{{ item.price }}</p>
        <p class="quantity"> {{ item.quantity }}</p>
        <Stepper class="stepper" v-on:increment="addToCart(item)" v-on:decrement="removeFromCart(item)" />
        <p class="temp-price">{{ item.price * item.quantity }}₫</p>
    </div>
</template>

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


