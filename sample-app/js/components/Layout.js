import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  // const name = "Will";
  // getVal(){
  //   return "Will";
  // }
  // constructor(){
  //   super();
  //   this.name = "Will";
  // }
  render() {
    var list = [
    <Header />,
    <Footer />,
    ];
    return (
      <div>
        {list}
      </div>
      // <h1>It's  {this.name}!</h1>
    );
  }
}

