import React, { Component } from 'react';
import Event from './timeline/event';
import EventForm from './timeline/event_form';

class Timeline extends Component {
  renderEvent(event) {
    return <Event {...event}/>
  }

  render() {
    return (
      <div>
        <EventForm/>
        {this.props.events.map(this.renderEvent)}
      </div>
    );
  }
}

export default Timeline;
