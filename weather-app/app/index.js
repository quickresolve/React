import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

// import Bootstrap from "./vendor/bootstrap-without-jquery";

import Layout from "./components/Layout.js";
import Home from "./components/Home.js";
import Altroute from "./components/Altroute.js";



const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="altroute" component={Altroute}></Route>
    </Route>
  </Router>,
app);


