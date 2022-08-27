const Weather = require('./weather')

const responseObject = {
  city: 'London',
  weather: 'Cloudy'
};

describe('Weather class', () => {
  it('gets the repo data', () => {
    const fakeWeather = {
      fetchweatherData: (_, callback) => {
        callback(responseObject);
      }
    }
    const weather = new Weather(fakeWeather);
    weather.fetch('London')
    expect(weather.getWeatherData()).toEqual(
      responseObject
    )
  });
});