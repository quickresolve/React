import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component{
  constructor(){
    super();

  }
  navigate(){
    console.log(this.props);
    this.props.history.pushState(null, "/");
  }
  render(){
    return(
      <div>
        <h1>Layout</h1>
        {this.props.children}
        <Link to="home"><button onClick={this.navigate.bind(this)}>Home</button></Link>
        <Link to="altroute"><button onClick={this.navigate.bind(this)}>Altroute</button></Link>
      </div>
    );
  }
}
