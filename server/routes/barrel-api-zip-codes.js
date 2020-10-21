const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/:zipcode', (req, res) => {
  axios.get(
    `https://www.zipcodeapi.com/rest/hbabUJNFqBHwV2XO0hEriOeZp2L1kmhzsRoLsmn1bK5UXRtFRKqClVeWPdnYmxeV/radius.json/${req.params.zipcode}/20/mile`
  ).then(resp => {
    res.json(resp.data.zip_codes);
  }).catch(e => {
    console.log(e.response);
  });
});

module.exports = router;
