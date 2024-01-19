<script setup lang="ts" name=Home>
import { ref } from 'vue'
import router from '../router/router'
import items from '../data/items'

const products = ref(items)

const gotoDetail = (item: any) => {
    router.push(
        {
            name: 'DetailPage',
            params: {
                id: item.id,
                name: item.name,
                price: item.price,
                description: item.description,
                image: item.imageUrl,
            }
        }
    )
}
</script>

<template>
    <div class="side-bar"></div>
    <div class="list-product">
        <div class="item" v-for="(item, index) in products" :key="index" @click="gotoDetail(item)">
            <img class="item-image" :src="`${item.imageUrl}`">
            <p>Converse, Sale hot</p>
            <p>{{ item.name }}</p>
            <p>950.000₫</p>
        </div>
    </div>
</template>


<style scoped>
.list-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.item {
    height: 270px;
    width: 200px;
    float: left;
    margin: 12px;
}

.item-image {
    height: 70%;
    width: 100%;
}

p {
    padding: 0px;
    margin: 5px 10px;
}
</style>
 



