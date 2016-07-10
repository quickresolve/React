var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/GithubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    console.log('getInitialState');
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentWillMount: function() {
    console.log('componentWillMount');
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    console.log('QUERY', query);
    console.log('componentDidMount');
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(function(players){
        console.log('PLAYERS', players);
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
    }.bind(this))
    // Fetch info from github then update the state
    // Use .bind to set this inside of the then function to the same this as the componentDidMount function. Updates context from outer function to inner function.

  },
  componentWillRecieveProps: function() {
    console.log('componentWillRecieveProps');
  },
  componentWillUnmount: function() {
    console.log('componentWillUnmount');
  },
  render: function(){
    return(
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo} />
    )
  }
});

module.exports = ConfirmBattleContainer;