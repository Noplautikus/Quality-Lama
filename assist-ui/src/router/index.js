import { createRouter, createWebHashHistory } from 'vue-router';
import CreateBill from '../components/o/CreateBill/CreateBill.vue';

const routes = [
  {
    path: '/',
    name: 'CreateBill',
    component: CreateBill,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
