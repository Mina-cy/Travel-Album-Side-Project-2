import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/tailwind.css'
import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000, // 動畫持續時間
  once: false,    // 是否只執行一次
  mirror: true    // 往回捲動時是否再次執行動畫
});

const pinia = createPinia() 
const app = createApp(App)

app.use(router)
app.use(pinia) 
app.mount('#app')