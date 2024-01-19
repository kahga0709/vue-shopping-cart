<script setup lang="ts">
import Card from '../components/Card.vue';
import MButton from '../components/MButton.vue';
import Stepper from '../components/Stepper.vue';
import { inject, onBeforeUpdate, ref } from 'vue'

interface Props {
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
}

const props = defineProps<Props>()

const cardRef = ref<any>(null);

const injectedData = inject<any>('dataKey');

const addToCart = () => {
    cardRef.value.openCard();

    inject('dataKey', injectedData.push({
        id: 4,
        name: "product 4",
        price: 4000000,
        amount: 4,
    },));

    console.log(injectedData);

}

onBeforeUpdate(() => {
    props.price
})



</script>
<template>
    <div class="detail-page">
        <div class="image-info">
            <img class="image" :src="`${props.image}`">
        </div>
        <div class="order-info">
            <h1>{{ props.name }}</h1>
            <p class="price">
                <span class="discount-price">{{ props.price }}₫ </span>
                <span class="code">Mã SP: N/A</span>
            </p>

            <p>Converse 1970s là 1 trong những dòng sản phẩm bán chạy nhất của Converse.Phần đế màu trắng ngà vintage được
                phủ 1 lớp bóng bên ngoài là điểm nhấn riêng cho dòng 1970s, dễ vệ sinh hơn.</p>

            <div class="b">
                <Stepper class="2" />
                <MButton class="bb" @click="addToCart" />
            </div>

            <Card ref="cardRef" />

        </div>
    </div>
</template>


<style scoped>
.b {
    display: flex;
}

.bb {
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