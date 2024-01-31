<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import Stepper from "../components/Stepper.vue";
import { formatCurrencyVND } from "../utils/format_currency_vnd";
import { fetchCart, removeCartItem, updateQty } from "../firebase/service";
import { Product } from "../data/items";

const cart = ref<Product[] | undefined>([]);
const total = ref<number>(0);

onBeforeMount(async () => onRefresh());

const decreaseQuantity = async (id: string) => {
  updateQty(id, "dec");
  onRefresh();
};

const increaseQuantity = async (id: string) => {
  updateQty(id, "inc");
  onRefresh();
};

const removeItem = async (id: string) => {
  await removeCartItem(id);
  onRefresh();
};

const onRefresh = async () => {
  cart.value = await fetchCart();
  console.log(cart.value);

  calculateTotalPrice();
};

const calculateTotalPrice = () => {
  if (cart.value) {
    const totalPrice = cart.value.reduce(
      (acc, item) => acc + (item?.qty ?? 0) * item.price,
      0
    );
    total.value = totalPrice;
  }
};
</script>

<template>
  <h1>GIỎ HÀNG</h1>

  <ul class="title-box" v-show="total !== 0">
    <li class="title-box1">SẢN PHẨM</li>
    <li class="title-box2">GIÁ</li>
    <li class="title-box3">SỐ LƯỢNG</li>
    <li class="title-box4">TẠM TÍNH</li>
  </ul>

  <div v-for="(item, index) in cart" :key="index" class="item">
    <div class="box1">
      <button class="delete-button" @click="removeItem(item.id)">Delete</button>
      <img :src="`${item.imageUrl}`" height="55px" width="55px" />
      <h4 class="name">{{ item.name }}</h4>
    </div>

    <div class="box2">
      <p class="price">{{ formatCurrencyVND(item.price) }}</p>
    </div>

    <div class="box3">
      <Stepper
        class="stepper"
        :initialQuantity="item.qty"
        v-on:increment="increaseQuantity(item.id)"
        v-on:decrement="decreaseQuantity(item.id)"
      />
    </div>

    <div class="box4">
      <p class="temp-price">
        {{ formatCurrencyVND(item.price * (item.qty ?? 0)) }}
      </p>
    </div>
  </div>

  <div class="total-price-container" v-show="total !== 0">
    <p class="total-price-title">TỔNG CỘNG GIỎ HÀNG</p>
    <hr />
    <p class="total-price">{{ formatCurrencyVND(total) }}</p>
  </div>

  <!-- <div class="list">
    <CartDetailItem
      v-for="(item, index) in cart"
      :key="index"
      :name="item.name"
      :image="`${item.image}`"
      :price="item.price"
      :initQty="item.quantity"
      :totalPrice="total"
      @increaseQty="increaseQty(item)"
      @decreaseQty="decreaseQty(item)"
      @remove="remove(index)"
    />
  </div> -->
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
  align-items: center;
  background-color: whitesmoke;
  padding: 12px;
  margin: 15px 30px;
  border: 1px solid gray;
}

.delete-button {
  height: 30px;
}

.temp-price,
.price {
  font-weight: 600;
  font-size: 18px;
}

.total-price-container {
  width: 350px;
  height: 150px;
  background-color: whitesmoke;
  float: right;
  margin: 0 30px;
  text-align: center;
  border: 2px solid gray;
}

.total-price-title {
  font-weight: 600;
}

.total-price {
  font-weight: 600;
  font-size: 30px;
}

img {
  margin: 0 10px;
}

.box1 {
  display: flex;
  align-items: center;
  width: 49%;
}

.box3,
.box2,
.box4 {
  width: 17%;
  text-align: center;
}

.title-box {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 30px;
}

.title-box1 {
  width: 49%;
  text-align: center;
  font-weight: 800;
}

.title-box3,
.title-box2,
.title-box4 {
  width: 17%;
  text-align: center;
  font-weight: 800;
}

li {
  display: inline-block;
}
</style>
