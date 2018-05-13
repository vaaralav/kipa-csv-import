const parse = require('csv-parse');
const fs = require('fs');
const { promisify } = require('util');

module.exports = async function readCsv(fileName) {
  try {
    const data = await promisify(fs.readFile)(fileName);
    const rows = await promisify(parse)(data, {});
    return rows.map(row => ({ vartio: row[0], value: row[1] }));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
