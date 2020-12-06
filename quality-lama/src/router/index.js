import { createRouter, createWebHashHistory } from 'vue-router';
import CreateBill from '../components/o/CreateBill/CreateBill.vue';
import BillGallery from '../components/o/BillGallery/BillGallery.vue';
import Settings from '../components/o/Settings/Settings.vue';

const routes = [
  {
    path: '/',
    name: 'BillGallery',
    component: BillGallery,
  },
  {
    path: '/CreateBill',
    name: 'CreateBill',
    component: CreateBill,
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
