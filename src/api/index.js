const conf = require('./config');
const url =`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=chile&api_key=${conf.default.apikey}&format=json`;

function getArtist(params) {
  return fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
    .catch( e=> console.log(e));
    
}

module.exports = {
  getArtist: getArtist,
}