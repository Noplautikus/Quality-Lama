import moment from 'moment';

const dateService = {
  getCurrentDate() {
    return moment().format('DD.MM.YYYY');
  },
};

export default dateService;
