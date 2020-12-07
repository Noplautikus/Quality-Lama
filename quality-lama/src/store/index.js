import { createStore } from 'vuex';
import userSettings from './modules/userSettings';

export default createStore({
  modules: {
    userSettings,
  },
});
