/* eslint-disable import/no-duplicates */
import { mount } from '@vue/test-utils';
import store from '@/store';
import ElementPlus from 'element-plus';
import CreateBill from '../CreateBill.vue';

const wrapper = mount(CreateBill, {
  global: {
    plugins: [store, ElementPlus],
  },
});

describe('createBill', () => {
  test('should increase page', () => {
    const { vm } = wrapper;
    vm.page = 0;

    vm.increasePage();

    expect(vm.page).toEqual(1);
  });
  test('should decrease page', () => {
    const { vm } = wrapper;
    vm.page = 1;

    vm.decreasePage();

    expect(vm.page).toEqual(0);
  });
});
