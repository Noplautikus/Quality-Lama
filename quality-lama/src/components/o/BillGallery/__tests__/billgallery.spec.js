/* eslint-disable import/no-duplicates */
import { mount } from '@vue/test-utils';
import store from '@/store';
import ElementPlus from 'element-plus';
import BillGallery from '../BillGallery.vue';

const billStore = [{ billNumber: '1' }, { billNumber: '2' }, { billNumber: '3' }, { billNumber: '4' }];
store.commit('OVERRIDE_BILL_STORE', billStore);

const wrapper = mount(BillGallery, {
  global: {
    plugins: [store, ElementPlus],
  },
});
const { vm } = wrapper;

describe('billGallery', () => {
  test('should store billStore to local varibale', () => {
    expect(vm.bills).toEqual(billStore.reverse());
  });
});
