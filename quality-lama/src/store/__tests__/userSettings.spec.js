import store from '..';

describe('userSettings', () => {
  test('should save settings in store', () => {
    const testSettings = {
      companyname: 'I am a Companyname',
      ceo: 'NIIIIINNNNOOOO',
    };

    store.commit('SAVE_USER_SETTINGS', testSettings);

    expect(store.state.userSettings.settings).toEqual(testSettings);
  });
});
