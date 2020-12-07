import { mount } from '@vue/test-utils';
import store from '@/store';
import ElementPlus from 'element-plus';
import Settings from '../Settings.vue';

const wrapper = mount(Settings, {
  global: {
    plugins: [store, ElementPlus],
  },
});

const { vm } = wrapper;

store.commit = jest.fn();
const testSettings = {
  companyname: 'testname',
  ceo: 'testceoname',
};
vm.userSettings = testSettings;

describe('settings', () => {
  test('should call store comit', () => {
    vm.saveUserSettings();

    expect(store.commit).toBeCalledTimes(1);
  });

  test('should call store with correct mutation', () => {
    vm.saveUserSettings();

    expect(store.commit).toHaveBeenCalledWith('SAVE_USER_SETTINGS', expect.anything());
  });
});
