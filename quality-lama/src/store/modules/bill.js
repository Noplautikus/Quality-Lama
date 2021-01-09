import { BILL_FILE_PATH } from '@/constants/filePaths';
import fileService from '@/services/fileService';

const userSettings = {
  state: {
    bills: [],
  },
  mutations: {
    ADD_AND_SAVE_BILL(state, payload) {
      state.bills.push(payload);
      fileService.writeJsonToFile(BILL_FILE_PATH, state.bills);
    },
    OVERRIDE_BILL_STORE(state, payload) {
      state.bills = payload;
    },
  },
};

export default userSettings;
