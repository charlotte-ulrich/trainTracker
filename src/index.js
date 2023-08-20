// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const router = require('./api');
const { request } = require('http');

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint
app.use('/', router);

const key = '3f7beb1f369f430891d68c6a122f496f';
const mapId = '41020';

const url = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${key}&mapid=${mapId}`;

app.get(url, (response, res, error, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body);
    res.json(body);
  } else {
    res.json(error);
  }
});

// starting the server
app.listen(8080, () => {
  console.log('listening on port 8080');
});
