const parse = require('csv-parse');
const fs = require('fs');
const { promisify } = require('util');
const readCsv = require('./readCsv');
const postResults = require('./postResults');

module.exports = async function main(fileName, endpoint, syoteId) {
  try {
    const data = await readCsv(fileName);
    await postResults(endpoint, syoteId, data);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
