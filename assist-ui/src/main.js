import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import '@/scss/main.scss';

const app = createApp(App);
app.use(router, ElementPlus);
app.mount('#app');
