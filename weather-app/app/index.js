import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout.js";
import routes from "./config/routes.js";


const app = document.getElementById('app');
ReactDOM.render(routes, app);


