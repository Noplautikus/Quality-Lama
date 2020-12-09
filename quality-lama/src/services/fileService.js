const fs = require('fs');

function writeJsonToFile(path, json) {
  const data = JSON.stringify(json);
  fs.writeFileSync(path, data);
}

function readJsonFromFile(path) {
  const fileData = fs.readFileSync(path);
  return JSON.parse(fileData);
}

function fileExists(path) {
  return fs.existsSync(path);
}

module.exports = {
  writeJsonToFile,
  readJsonFromFile,
  fileExists,
};
