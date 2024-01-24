<script setup lang="ts">
import LoginFromModal from "./LoginFromModal.vue";
import { ref } from "vue";

const isOpenLogin = ref(false);

const openLoginForm = () => {
  isOpenLogin.value = true;
};

const closeLoginForm = () => {
  isOpenLogin.value = false;
};
</script>

<template>
  <header>
    <div class="menu">
      <router-link class="link" to="/">
        <p class="item-menu">Home</p>
      </router-link>

      <router-link class="link" to="/cart-detail">
        <p class="item-menu">Cart Detail</p>
      </router-link>
    </div>

    <div class="login-register">
      <span @click="openLoginForm">Login</span>
    </div>
  </header>

  <LoginFromModal v-if="isOpenLogin" @close="closeLoginForm" />
</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu {
  display: flex;
  justify-content: center;
}

.item-menu {
  margin: 10px;
  font-size: large;
  cursor: pointer;
  font-weight: 600;
}

.link {
  color: inherit;
  text-decoration: none;
}

.login-register {
  font-weight: 600;
  margin-right: 50px;
}
</style>
