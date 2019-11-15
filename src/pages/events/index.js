import React, {Component, Fragment} from 'react';
import TopBlock from "../../components/TopBlock";
import event from "../../img/event.jpg";
import events from "../../constants/events";
import EventCard from "../../components/EventCard";
import "./style.css"

class EventsPage extends Component {
  render() {
    return (
      <>
        <TopBlock
          img={event}
          height={"400px"}
          color={"rgba(74, 164, 226, .55)"}
        />
        <div className={"container event-cards-container"}>
          {events.map((yearEvents, index) => (
            <Fragment key={index}>
              <h2>{yearEvents.year}</h2>
              {yearEvents.children.map((event, index) => (
                <EventCard event={event} key={index}/>
              ))}
            </Fragment>
          ))}
        </div>
      </>
    );
  }
}

export default EventsPage;