import React from "react";

export default class Layout extends React.Component {
  // const name = "Will";
  // getVal(){
  //   return "Will";
  // }
  constructor(){
    super();
    this.name = "Will";
  }
  render() {
    return (
      <h1>It's  {this.name}!</h1>
    );
  }
}

