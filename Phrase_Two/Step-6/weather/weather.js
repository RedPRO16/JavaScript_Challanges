class Weather {
  constructor(api) {
    this.api = api
  }

  fetch(city) {
    this.city = city;
    this.api.fetchweatherData(this.city, (response) => { this.result = (response) });
  }

  getWeatherData() {
    return this.result
  };
};

module.exports = Weather;