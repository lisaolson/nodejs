const request = require('request');

let geocodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address);

  request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=dytT15lCJ7c9jgbkbGckrFrXgGizA8Tn&location=' + encodedAddress,
    json: true
  }, (error, response, body) => {
      if (error) {
        callback('Unable to connect to Google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find that address');
      } else if (body.info.statuscode === 0) {
        callback(undefined, {
          address: body.results[0].locations[0].street,
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        });
      }
  });
};

module.exports.geocodeAddress = geocodeAddress;
