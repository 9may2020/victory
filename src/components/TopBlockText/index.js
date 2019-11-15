import React, { Component } from "react";
import "./style.css";

class TopBlockText extends Component {
  render() {
    return <div className={"top-block-text"}>{this.props.children}</div>;
  }
}

export default TopBlockText;
