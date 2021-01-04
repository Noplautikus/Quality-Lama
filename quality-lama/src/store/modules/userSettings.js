import { USER_SETTINGS_FILE_PATH } from '@/constants/filePaths';
import fileService from '@/services/fileService';

const userSettings = {
  state: {
    settings: {
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
    },
  },
  mutations: {
    SAVE_USER_SETTINGS(state, payload) {
      state.settings = payload;
      fileService.writeJsonToFile(USER_SETTINGS_FILE_PATH, state.settings);
    },
  },
  getters: {
    getUserSettings(state) {
      return state.settings;
    },
  },
};

export default userSettings;
