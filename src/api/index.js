const conf = require('./config');
const URL =`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${conf.default.apikey}&format=json`;

function getArtist(country) {
	console.log(country);
	url = URL.replace(':country', country)
  return fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
    .catch(e=> {
    	console.log(e)
    });
    
}

module.exports = {
  getArtist: getArtist,
}