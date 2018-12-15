const request = require('request');

let getWeather = () => {
  request({
    url: 'https://api.darksky.net/forecast/84ee6b3b070ea117c30b25868f5c371d/37.8267,-122.4233',
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body.currently.temperature);
    } else {
      console.log('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = getWeather;
