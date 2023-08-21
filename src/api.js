const { request } = require('http');

const router = require('express').Router();

const key = '3f7beb1f369f430891d68c6a122f496f';
const mapId = '41020';

const url = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${key}&mapid=${mapId}`;

const routeOptions = {
  host: 'http://lapi.transitchicago.com/api/1.0',
  path: 'ttarrivals',
  key: key,
  mapid: mapId,
};

router.get('/', (req, res) => {
  request(routeOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body);
      res.json(body);
    } else {
      res.json(error);
    }
  });
});

module.exports = router;
