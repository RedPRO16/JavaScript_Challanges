class WeatherView {

  displayWeather(weather) {
    const to_display =
      `City:        ${weather.name}\n` +
      `Weather:     ${weather.weather[0].main}\n` +
      `Temperature: ${weather.main.temp}\n` +
      `Feels like:  ${weather.main.feels_like}\n` +
      `Humidity:    ${weather.main.humidity}%`

    return to_display;
  };
};

module.exports = WeatherView;