const os = require('os');
const path = require('path');

const USER_SETTINGS_FILE_PATH = path.join(os.homedir(), 'AppData', 'Roaming', 'quality-lama', 'userSettings.json');
const BILL_FILE_PATH = path.join(os.homedir(), 'AppData', 'Roaming', 'quality-lama', 'bills.json');

module.exports = {
  USER_SETTINGS_FILE_PATH,
  BILL_FILE_PATH,
};
