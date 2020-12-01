const fs = require('fs');

module.exports.readFileToArray = (path, mapper) => fs.readFileSync(`${path}`, 'utf8')
  .toString()
  .replace(/\r\n/g, '\n')
  .split('\n')
  .map(mapper);
