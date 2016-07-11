import React from "react";
import ReactRouter from "react-router";
import Router from ReactRouter.Router;
import Route from ReactRouter.Route;
import IndexRoute from ReactRouter.IndexRoute;
import hashHistory from ReactRouter.hashHistory;

import Layout from "../components/Layout.js";
import Home from "../components/Home.js";

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} />
      <IndexRoute component={Home}/>
    </Route>
  </Router>
);

module.exports = routes;