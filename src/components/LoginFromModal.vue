<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../store/pinia/auth";
const authStore = useAuthStore();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const email = ref<string>("");
const emailError = ref<string>("");
const password = ref<string>("");
const passwordError = ref<string>("");

const emit = defineEmits(["close"]);

const clearErrors = () => {
  emailError.value = "";
  passwordError.value = "";
};

const validateForm = () => {
  clearErrors();

  if (!email.value) {
    emailError.value = "Email is required";
  } else if (!isValidEmail(email.value)) {
    emailError.value = "Invalid email format";
  }

  if (!password.value) {
    passwordError.value = "Password is required";
  } else if (password.value.length < 6) {
    passwordError.value = "Password should have at least 6 characters";
  }

  if (!emailError.value && !passwordError.value) {
    login();
  }
};

const isValidEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

const login = () => {
  emit("close");
  authStore.login(email.value, password.value);
};
</script>

<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <form @submit.prevent="validateForm">
        <div class="container">
          <h4 @click="emit('close')">X</h4>

          <label for="email"><b>Email</b></label>
          <input
            type="text"
            placeholder="Enter email"
            required
            v-model="email"
          />
          <p v-if="emailError" class="error">{{ emailError }}</p>

          <label for="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            required
            v-model="password"
          />
          <p v-if="passwordError" class="error">{{ passwordError }}</p>

          <div class="submit-container">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 300px;
}

button:hover {
  opacity: 0.8;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.container {
  padding: 26px;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 60px;
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto 30% auto;
  border: 1px solid #888;
  width: 500px;
}

.submit-container {
  display: flex;
  justify-content: center;
}

.error {
  color: red;
  font-size: 13px;
  margin: 0;
}

h4 {
  margin: 0px 10px 0px 0px;
  text-align: end;
}
</style>
