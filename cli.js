#!/usr/bin/env node
'use strict';
const meow = require('meow');
const main = require('./index.js');

const cli = meow(`
  Käyttö $ kipa-csv-import <CSV-tiedoston nimi> <syöttösivun osoite> <syötteen ID>

  Esimerkki: $ kipa-csv-import vartio_vs_manse_SI.csv http://10.0.0.10/kipa/LLHK18/syota/tehtava/139/ 449

  - CSV-tiedoston nimi: Esim. "tulokset.csv"
  - syöttösivun osoite: Esim. "http://10.0.0.10/kipa/LLHK18/syota/tehtava/139/"
  - syötteen ID: Esim. 449, löytyy syötesivun HTML-merkkauksesta
`);

(async function() {
  try {
    if (cli.input.length !== 3) {
      throw 'Parametreja on väärä määrä!';
    }
    await main(...cli.input);
  } catch (err) {
    console.log(err);
    console.log(cli.help);
    process.exit(1);
  }
})();
