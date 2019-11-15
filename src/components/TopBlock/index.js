import React, { Component } from "react";
import "./style.css";

class TopBlock extends Component {
  render() {
    let style = {};
    style.background = `url(${this.props.img}) no-repeat center center`;
    if (this.props.height) {
      style.height = this.props.height;
    }

    return (
      <section className={"top-block"} style={style}>
        <div
          className="overlay"
          style={this.props.color && { background: this.props.color }}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">{this.props.children}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default TopBlock;
