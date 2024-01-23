import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import store from './store/store';
import { createPinia } from "pinia";

const app = createApp(App)
app.use(router)
app.use(store)
app.use(createPinia())
app.mount('#app')

