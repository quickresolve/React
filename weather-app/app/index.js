import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

// import Bootstrap from "./vendor/bootstrap-without-jquery";

import Layout from "./components/Layout.js";



const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>

    </Route>
  </Router>,
app);


