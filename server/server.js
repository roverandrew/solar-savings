const path = require('path');
const express = require('express');
const fetch = require('node-fetch');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');
const buildPath = path.join(__dirname, '..', 'build');

app.use(express.static(publicPath));
app.use(express.static(buildPath));

app.get('/location', async (req, res) => {
  const { latitude, longitude } = req.query;
  let fetchedLocationData = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&lang=de&limit=10&apiKey=db0750073ffb4979ae72e94c742cd728`);
  let locationData = await fetchedLocationData.json();
  res.json(locationData);
});

app.get('/power', async (req, res) => {
  const { latitude, longitude, systemCapacity, azimuth, tilt, arrayType, moduleType, losses } = req.query;
  const fetchedPowerData = await fetch(`https://developer.nrel.gov/api/pvwatts/v6.json?api_key=nANSd1IKE1BAzkWI5BwrefIJDaTXhuEJd4O89gQv&lat=${latitude}&lon=${longitude}&system_capacity=${systemCapacity}&azimuth=${azimuth}&tilt=${tilt}&array_type=${arrayType}&module_type=${moduleType}&losses=${losses}`);
  const powerData = await fetchedPowerData.json();
  res.json(powerData);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
