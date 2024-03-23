import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Vue3Lottie from 'vue3-lottie'
import './index.css'
const app = createApp(App)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}
app.use(router)
app.use(store)
app.use(Vue3Lottie)
app.mount('#app')
