import { mount } from '@vue/test-utils';
import store from '@/store';
import ElementPlus from 'element-plus';
import Settings from '../Settings.vue';

const wrapper = mount(Settings, {
  global: {
    plugins: [store, ElementPlus],
  },
});

describe('settings', () => {
  test('should set userSettings if there are settings saved in store already', () => {
    const testData = {
      companyname: 'test',
    };
    store.commit('SAVE_USER_SETTINGS', testData);

    const testWrapper = mount(Settings, {
      global: {
        plugins: [store, ElementPlus],
      },
    });

    const { vm } = testWrapper;

    expect(vm.userSettings.companyname).toEqual(testData.companyname);
  });
  test('should call store comit', () => {
    const { vm } = wrapper;

    store.commit = jest.fn();
    const testSettings = {
      companyname: 'testname',
      ceo: 'testceoname',
    };
    vm.userSettings = testSettings;

    vm.saveUserSettings();

    expect(store.commit).toBeCalledTimes(1);
  });

  test('should call store with correct mutation', () => {
    const { vm } = wrapper;

    vm.saveUserSettings();

    expect(store.commit).toHaveBeenCalledWith('SAVE_USER_SETTINGS', expect.anything());
  });
});
