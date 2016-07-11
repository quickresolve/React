import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  // const name = "Will";
  // getVal(){
  //   return "Will";
  // }
  constructor(){
    super();
    this.state = {name: "Laura"};
  }
  render() {
    var list = [
    <Header />,
    <Footer />,
    ];
    setTimeout(() => {
      this.setState({name: "Bob"});
    }, 1000)
    return (
      <div>
        {this.state.name};
        {list};
      </div>
      // <h1>It's  {this.name}!</h1>
    );
  }
}

