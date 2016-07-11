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
  changeTitle(title) {
    this.setState({title});
  }
  render() {
    // var list = [
    // <Header />,
    // <Footer />,
    // ];
    // setTimeout(() => {
    //   this.setState({title: "Welcome Bob!"});
    // }, 1000);
    return (
      <div>
        <Header
          changeTitle={this.changeTitle.bind(this)}
          title={this.state.title} />
        <Footer />
      </div>
      // <h1>It's  {this.name}!</h1>
    );
  }
}

