const request = require('request');

let getWeather = (lat, lng, callback) => {
  request({
    url: 'https://api.darksky.net/forecast/84ee6b3b070ea117c30b25868f5c371d/' + lat + ',' + lng,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
