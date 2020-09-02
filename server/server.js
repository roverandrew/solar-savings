const path = require('path');
const express = require('express');
const fetch = require('node-fetch');
const app = express();
require('dotenv').config()

const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('/location', async (request, response) => {
  const geoAPIKey = process.env.GEO_API_KEY;
  let apiURL = `https://api.getgeoapi.com/api/v2/ip/check?api_key=${geoAPIKey}`;

  let response = await fetch(apiURL);
  let data = await response.json();
  response.json(data);
});


app.get('/power:powerData', async (request, response) => {
  const powerData = request.params.powerData.split(',');
  const latitude = powerData[0];
  const longitude = powerData[1];
  const systemCapacity = powerData[2];
  const azimuth = powerData[3];
  const tilt = powerData[4];
  const arrayType = powerData[5];
  const moduleType = powerData[6];
  const losses = powerData[7];

  const nrelAPIKey = process.env.NREL_API_KEY;
  const apiURL = `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${nrelAPIKey}&lat=${latitude}&lon=${longitude}&system_capacity=${systemCapacity}&azimuth=${azimuth}&tilt=${tilt}&array_type=${arrayType}&module_type=${moduleType}&losses=${losses}`;

  const res = await fetch(apiURL);
  const data = await res.json();
  response.json(data);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is up!');
});
