const fetch = require('node-fetch');
const FormData = require('form-data');

module.exports = async function postResults(endpoint, syoteId, data) {
  const formData = new FormData();
  data.forEach(syote => {
    const arvo = `${syote.vartio}_${syoteId}-arvo`;
    const tarkistus = `${syote.vartio}_${syoteId}-tarkistus`;
    formData.append(arvo, syote.value);
    formData.append(tarkistus, '');
  });

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: formData.getHeaders()
    }).then(res => {
      if (res.status > 299) {
        console.log('error' + res.status);
        console.log(res.body);
      }
      return res;
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
