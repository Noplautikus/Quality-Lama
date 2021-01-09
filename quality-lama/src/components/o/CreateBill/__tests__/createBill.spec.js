/* eslint-disable import/no-duplicates */
import { mount } from '@vue/test-utils';
import store from '@/store';
import ElementPlus from 'element-plus';
import { ElNotification } from 'element-plus';
import CreateBill from '../CreateBill.vue';
import dateService from '../../../../services/dateService';

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
  test('should format number correct to currency', () => {
    const result = vm.formatPrice(12.6);
    expect(result).toBe('12,60');
  });
  test('should remove specific object in articles array', () => {
    const article1 = {
      quantity: '2',
      name: 'testname',
      pricePerPiece: '23',
      priceForAll: '46',
    };
    const article2 = {
      quantity: '22',
      name: 'testname2',
      pricePerPiece: '232',
      priceForAll: '462',
    };
    const articles = [article1, article2];
    vm.bill.articles = [...articles];

    vm.removeArticle(0);

    expect(vm.bill.articles[0]).toEqual(article2);
  });
  test('should calculate correct overall price', () => {
    const article1 = {
      quantity: '2',
      name: 'testname',
      pricePerPiece: '23',
      priceForAll: 46,
    };
    const article2 = {
      quantity: '22',
      name: 'testname2',
      pricePerPiece: '232',
      priceForAll: 462,
    };
    const articles = [article1, article2];
    vm.bill.articles = [...articles];

    vm.calculateOverallPrice();

    expect(vm.bill.overallPrice).toEqual(article1.priceForAll + article2.priceForAll);
  });
  test('should set correct date', () => {
    const date = '02.04.2000';
    dateService.getCurrentDate = jest.fn(() => (date));

    vm.setBillDate();

    expect(vm.bill.date).toEqual(date);
  });
  test('should call store with correct mutation', () => {
    store.commit = jest.fn();

    vm.addBillToStore();

    expect(store.commit).toHaveBeenCalledWith('ADD_AND_SAVE_BILL', expect.anything());
  });
  test('should call notification', () => {
    ElNotification.success = jest.fn();

    vm.addBillToStore();

    expect(ElNotification.success).toBeCalled();
  });
});
