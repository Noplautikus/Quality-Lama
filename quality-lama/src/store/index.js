import { createStore } from 'vuex';
import userSettings from './modules/userSettings';
import bill from './modules/bill';

export default createStore({
  modules: {
    userSettings,
    bill,
  },
});
