var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param);
  // returns a promise
};

var helpers = {
  getPlayersInfo = function(players) {
    // This function will evaluate to an array of promises
    return axios.all(players.map(function(username){
      return getUserInfo(username);
    })).then(function(info){
      return info.map(function(user){
        return user.data;
      })
    }).catch(function(err){
      // catches errors
      console.warn('Error in getPlayersInfo', err);
    })
    // Fetch some data from Github
    // Using map lets you loop over each user in players array
    // axios.all evaluates the array of promises and returns when they are all done resolving
  }
};

module.exports = helpers;