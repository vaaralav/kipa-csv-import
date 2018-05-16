const fetch = require('node-fetch');
const cheerio = require('cheerio');

module.exports = async endpoint => {
  try {
    const response = await fetch(endpoint);
    const body = await response.text();
    const $ = cheerio.load(body);
    const firstRowInputs = $('#taulukko tbody tr')
      .first()
      .find('input');

    // Collect ids here
    const ids = [];
    firstRowInputs.each((i, elem) => {
      ids.push($(elem).attr('id'));
    });

    // Get only the syote IDs from the element ids
    // ID: <vartion_numero>_<syote_id>-<tarkiste/arvo>
    const syoteIds = ids
      .map(
        id =>
          id
            .split('_')
            .slice(-1)[0] // Alaviivan jälkeen
            .split('-')[0] // Ennen väliviivaa
      )
      .filter((v, i, a) => a.indexOf(v) === i); // Suodata duplikaatit

    return syoteIds;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
