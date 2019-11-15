import React, { Component } from "react";
import "./style.css";

class Content extends Component {
  render() {
    return (
      <div
        className={`container content-block`}
        style={this.props.height && { minHeight: this.props.height }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Content;
