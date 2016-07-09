// Lists declarative routes for our app

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var ResultsContainer = require('/containers/ResultsContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='playerOne'/> component={PromptContainer}/>
      <Route path='playerTwo/:playerOne'/> component={PromptContainer}/>
      // Here we are passing a route parameter
       <Route path='battle'/> component={ConfirmBattleContainer}/>
      <Route path='results'/> component={ResultsContainer}/>
    </Route>
  </Router>
);

module.exports = routes;