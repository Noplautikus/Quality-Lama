import store from '..';

const fs = require('fs');

describe('userSettings', () => {
  test('should save settings in store', () => {
    fs.writeFileSync = jest.fn();
    const testSettings = {
      companyname: 'I am a Companyname',
      ceo: 'NIIIIINNNNOOOO',
    };

    store.commit('SAVE_USER_SETTINGS', testSettings);

    expect(store.state.userSettings.settings).toEqual(testSettings);
  });
});
