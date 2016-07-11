import React from "react";

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
    <Header />,
    <Header />,
    ];
    return (
      <div>
        {list}
      </div>
      // <h1>It's  {this.name}!</h1>
    );
  }
}

