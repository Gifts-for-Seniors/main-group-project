const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/:zipcode', (req, res) => {
  axios.get(
    `https://www.zipcodeapi.com/rest/hbabUJNFqBHwV2XO0hEriOeZp2L1kmhzsRoLsmn1bK5UXRtFRKqClVeWPdnYmxeV/radius.json/${req.params.zipcode}/20/mile`
  ).then(resp => {
    res.json(resp.data.zip_codes);
  }).catch(e => {
    axios.get(`https://www.zipwise.com/webservices/radius.php?key=chupcauyzztykpb3&zip=${req.params.zipcode}&radius=20&format=json`).then(resp => {
      let resultArr = resp.data.results.map(zipObj => {
        return {
          distance: Number(zipObj.distance),
          zip_code: zipObj.zip,
          city: zipObj.city,
          state: zipObj.state
        };
      });

      res.json(resultArr);
    }).catch(e => {
      res.status(400).send(new Error(e.toString()));
    });
  });
});

module.exports = router;
