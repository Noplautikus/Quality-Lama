/* eslint-disable no-param-reassign */
const userSettings = {
  state: {
    settings: {},
  },
  mutations: {
    SAVE_USER_SETTINGS(state, payload) {
      state.settings = payload;
    },
  },
};

export default userSettings;
