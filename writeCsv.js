const toCSV = require('csv-stringify');
const fs = require('fs');
const { promisify } = require('util');

async function writeCsv(fileName, results) {
  await promisify(fs.writeFile)(
    fileName,
    await promisify(toCSV)(
      results.map(result => [result.vartio, ...result.results]),
      { quoted: true }
    )
  );
}

module.exports = writeCsv;
