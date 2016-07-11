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
    this.state = {title: "Welcome!"};
  }
  render() {
    // var list = [
    // <Header />,
    // <Footer />,
    // ];
    setTimeout(() => {
      this.setState({title: "Welcome Bob!"});
    }, 1000);
    return (
      <div>
        <Header title={this.state.title} />

        <Footer />
        // {this.state.name};
        // {list};
      </div>
      // <h1>It's  {this.name}!</h1>
    );
  }
}

