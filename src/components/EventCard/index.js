import React, { Component } from "react";
import "./style.css";

class EventCard extends Component {
  render() {
    const event = this.props.event;
    return (
      <div className={"event-card clearfix"}>
        <div className={"img"}>
          <img alt={event.title} src={event.img} />
        </div>
        <div className={"description"}>
          <h3>{event.title}</h3>
          <h4>{event.subtitle}</h4>
          <p>{event.date}</p>
          <span>{event.description}</span>
        </div>
      </div>
    );
  }
}

export default EventCard;
