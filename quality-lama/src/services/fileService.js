const fs = require('fs');

const fileService = {
  writeJsonToFile(path, json) {
    const data = JSON.stringify(json);
    fs.writeFileSync(path, data);
  },
  readJsonFromFile(path) {
    const fileData = fs.readFileSync(path);
    return JSON.parse(fileData);
  },
  fileExists(path) {
    return fs.existsSync(path);
  },
};

export default fileService;
