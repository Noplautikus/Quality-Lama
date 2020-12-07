import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import store from './store';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import '@/scss/main.scss';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount('#app');
