const fetch = require('node-fetch');
const FormData = require('form-data');

module.exports = async function postResults(endpoint, syoteIds, data) {
  const formData = new FormData();
  data.forEach(syote => {
    syoteIds.forEach((syoteId, index) => {
      const arvo = `${syote.vartio}_${syoteId}-arvo`;
      const tarkistus = `${syote.vartio}_${syoteId}-tarkistus`;
      formData.append(arvo, syote.values[index]);
      formData.append(tarkistus, '');
    });
  });

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: formData.getHeaders()
    }).then(async res => {
      if (res.status > 299) {
        console.log('error' + res.status);
        //console.log(await res.text());
      }
      return res;
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
