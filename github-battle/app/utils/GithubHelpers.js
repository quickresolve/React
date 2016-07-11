var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param);
  // returns a promise
};


function getRepos(username){
  // fetch usernames repos
   return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars(repos){
  //calculate all the stars that the user has
  return repos.data.reduce(function(prev, current){
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData(player) {
  // Get repos
  return getRepos(player.login)
    .then(getTotalStars
  // Pass to getTotalStars
    .then(function(totalStars){
      // Return an object with that data
      return{
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores(players){
  // return an array, after doing fancy algorithms to determine a winner
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

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
  },
  battle: function(players){
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err){
        console.warn('Error in getPlayersInfo: ', err )
      })
  }
};

module.exports = helpers;