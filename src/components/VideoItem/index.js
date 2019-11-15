import React, { Component } from "react";
import "./style.css";

class VideoItem extends Component {
  render() {
    const video = this.props.video;
    return (
      <>
        <div className={"video-item clearfix"}>
          <div className={"img"}>
            <img alt={video.title} src={video.img} />
          </div>
          <div className={"description"}>
            <h3>{video.title}</h3>
            <span>{video.description}</span>
          </div>
          <div className={"href"}>
            <a href={video.href} target="_blank">
              Смотреть на <span className={"ivi-color"}>ivi.ru</span>
            </a>
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default VideoItem;
