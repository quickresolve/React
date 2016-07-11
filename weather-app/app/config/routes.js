import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";


import Layout from "../components/Layout.js";
import Home from "../components/Home.js";

export default class Routes extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/' component={Layout} />
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    );
  }
}

