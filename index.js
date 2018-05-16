const parse = require('csv-parse');
const fs = require('fs');
const { promisify } = require('util');
const readCsv = require('./readCsv');
const getSyoteIds = require('./getSyoteIds');
const postResults = require('./postResults');

module.exports = async function main(fileName, endpoint, syoteId) {
  try {
    console.log('Luetaan CSV...');
    const data = await readCsv(fileName);

    console.log('Haetaan syötteiden IDt...');
    const syoteIds = await getSyoteIds(endpoint);

    console.log('Tallennetaan syötteet...');
    await postResults(endpoint, syoteIds, data);
    console.log('Kaikki onnistui!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
