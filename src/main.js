import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Vue3Lottie from 'vue3-lottie'
import './index.css'
import './registerServiceWorker'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(Vue3Lottie)
app.mount('#app')
