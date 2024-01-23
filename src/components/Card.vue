<script setup lang="ts">
import { ref } from "vue";
import router from "../router/router";
import store from "../store/store";

const isOpenCard = ref(false);
const cart = ref<any[]>(store.state.cart);

const openCard = () => (isOpenCard.value = true);
const closeCard = () => (isOpenCard.value = false);
const gotoCartDetail = () => router.push("/cart-detail");

defineExpose({ openCard, isOpenCard });
</script>

<template>
  <Transition>
    <div class="card" v-if="isOpenCard">
      <div class="title-row">
        <h1>Card</h1>
        <button class="close-button" @click="closeCard">close</button>
      </div>

      <div class="list">
        <div class="item-list" v-for="(item, index) in cart" :key="index">
          <div class="row1">
            <img :src="`${item.image}`" height="55px" width="55px" />
            <div class="name-item">{{ item.name }}</div>
          </div>
          <div class="row2">{{ item.quantity }} x {{ item.price }}đ</div>
          <hr />
        </div>
      </div>

      <hr />
      <div class="check-out">
        <div class="btn-btn1" @click="gotoCartDetail">XEM GIỎ HÀNG</div>
        <div class="btn-btn2" @click="closeCard">THANH TOÁN</div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
h1 {
  margin-left: 12px;
}

.card {
  height: 100vh;
  width: 350px;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0px;
  display: flex;
  flex-direction: column;
}

.v-enter-active {
  animation: added 0.3s linear;
}

.v-leave-active {
  animation: added 0.3s reverse;
}

@keyframes added {
  from {
    translate: 100px 0;
  }

  to {
    translate: 0 0;
  }
}

.check-out {
  display: flex;
  flex-direction: column;
}

.btn {
  height: 50px;
  width: 100%;
}

.btn-btn1 {
  background-color: #ececec;
  color: #2d2d2d;
  margin-bottom: 10px;
  text-align: center;
  padding: 12px;
}

.btn-btn2 {
  background-color: red;
  color: white;
  text-align: center;
  padding: 12px;
}

.item-list {
  padding: 10px 20px;
  margin: 10px;
}

.list {
  overflow: auto;
}

.row1 {
  display: flex;
}

.name-item {
  margin-left: 8px;
}

.row2 {
  margin-top: 10px;
}

.title-row {
  display: flex;
  justify-content: space-between;
}

.close-button {
  height: 30px;
  width: 50px;
  margin-top: 20px;
  margin-right: 20px;
}
</style>
