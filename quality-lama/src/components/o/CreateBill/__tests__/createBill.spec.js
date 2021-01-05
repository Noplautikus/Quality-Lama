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

const { vm } = wrapper;

describe('createBill', () => {
  test('should increase page', () => {
    vm.page = 0;

    vm.increasePage();

    expect(vm.page).toEqual(1);
  });
  test('should decrease page', () => {
    vm.page = 1;

    vm.decreasePage();

    expect(vm.page).toEqual(0);
  });
  test('should calculate correct price for all articles', () => {
    vm.article.pricePerPiece = '25';
    vm.article.quantity = '2';

    const result = vm.calculatePriceForAll();

    expect(result).toEqual(50);
  });
  test('should push article to article array in bill object', () => {
    const testArticle = {
      quantity: '2',
      name: 'testname',
      pricePerPiece: '23',
      priceForAll: 46,
    };
    vm.article = { ...testArticle };

    vm.addArticleToBill();

    expect(vm.bill.articles[0]).toEqual(testArticle);
  });
  test('should set parameter of article to null', () => {
    const testArticle = {
      quantity: '2',
      name: 'testname',
      pricePerPiece: '23',
      priceForAll: '46',
    };
    vm.article = testArticle;

    vm.addArticleToBill();

    expect(vm.article.name).toBe(null);
    expect(vm.article.quantity).toBe(null);
    expect(vm.article.pricePerPiece).toBe(null);
    expect(vm.article.priceForAll).toBe(null);
  });
});
