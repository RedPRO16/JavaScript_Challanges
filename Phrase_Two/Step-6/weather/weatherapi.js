const got = require('got');
const json = require('./keys.json');
const apiKey = json.apiKey;

let city = null;
let weatherData = null;

class WeatherApi {
  fetchweatherData(city, callback) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    got(apiUrl).then((response) => {
      weatherData = JSON.parse(response.body);
      callback(weatherData);
    });
    console.log('Requesting weather data');
  };
};

module.exports = WeatherApi;