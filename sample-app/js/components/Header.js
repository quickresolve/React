import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
    // pass title from input to the changeTitle function that was passed through props
  }
  render(){
    // this.props.changeTitle("newTitle");
    return (
      <div>
        <Title title={this.props.title}/>
        <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
