const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
})
.help()
.alias('help', 'h')
.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = 'http://www.mapquestapi.com/geocoding/v1/address?key=dytT15lCJ7c9jgbkbGckrFrXgGizA8Tn&location=' + encodedAddress
