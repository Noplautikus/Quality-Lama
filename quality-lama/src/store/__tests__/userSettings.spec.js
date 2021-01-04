import fileService from '@/services/fileService';
import store from '..';

describe('userSettings', () => {
  afterEach(() => {
    const initialSettings = {
      companyname: null,
      ceo: null,
      street: null,
      houseNumber: null,
      postcode: null,
      location: null,
      phone: null,
      taxId: null,
      iban: null,
      bank: null,
      bic: null,
    };

    store.commit('SAVE_USER_SETTINGS', initialSettings);
  });

  test('should save settings in store and write to file', () => {
    fileService.writeJsonToFile = jest.fn();
    const testSettings = {
      companyname: 'I am a Companyname',
      ceo: 'NIIIIINNNNOOOO',
    };

    store.commit('SAVE_USER_SETTINGS', testSettings);

    expect(store.state.userSettings.settings).toEqual(testSettings);
    expect(fileService.writeJsonToFile).toBeCalled();
  });
  test('should get state', () => {
    const testSettings = {
      companyname: 'test',
    };
    store.commit('SAVE_USER_SETTINGS', testSettings);

    const state = store.getters.getUserSettings;

    expect(state).toEqual(testSettings);
  });
});
