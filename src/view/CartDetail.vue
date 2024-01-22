<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
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
        quantity: 1,
    })
    getTotal();
}

const decreaseQuantity = (item: any) => {
    store.commit('removeFromCart', { id: item.id })
    getTotal()
}

const remove = (index: number) => {
    store.commit('remove', index)
    getTotal()
}

const total = ref<number>(0)

const getTotal = () => {
    total.value = 0;
    for (let index = 0; index < cart.value.length; index++) {
        const element = cart.value[index];
        total.value += (element.quantity * element.price);
    }
}

onBeforeMount(() => {
    getTotal()
})

</script>

<template>
    <h1>GIỎ HÀNG</h1>
    <div v-for="(item, index) in cart" :key="index" class="item">
        <button class="delete-button" @click="remove(index)">delete</button>
        <img :src="`${item.image}`" height="50px" width="50px">
        <p class="name">{{ item.name }}</p>
        <p class="price">{{ item.price }}</p>
        <Stepper class="stepper" :initialQuantity="item.quantity" v-on:increment="addToCart(item)"
            v-on:decrement="decreaseQuantity(item)" />
        <p class="temp-price">{{ item.price * item.quantity }}₫</p>
    </div>
    <div class="total-price-container" v-show="total !== 0">
        <p class="total-price-title">TOTAL PRICE: </p>
        <p class="total-price">{{ total }}đ</p>
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

.total-price-container {
    display: flex;
    justify-content: center;
}

.total-price-title {
    font-weight: 600;
}

.total-price {
    color: red;
    font-weight: 600;
}
</style>


