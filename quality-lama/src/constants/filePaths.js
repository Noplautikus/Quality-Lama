const os = require('os');
const path = require('path');

const USER_SETTINGS_FILE_PATH = path.join(os.homedir(), 'AppData', 'Roaming', 'quality-lama', 'userSettings.json');

module.exports = {
  USER_SETTINGS_FILE_PATH,
};
