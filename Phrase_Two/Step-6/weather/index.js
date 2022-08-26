// file: index.js
var json = require('./keys.json');

const got = require('got');
const apiKey = '66ab47664f73175270fd6159dfa7943b'; // include our key
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body);
  console.log(weatherData);
});

console.log('Requesting weather data');