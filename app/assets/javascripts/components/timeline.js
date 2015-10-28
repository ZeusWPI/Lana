import React, { Component } from 'react';
import Event from './timeline/event';
import EventForm from './timeline/event_form';

class Timeline extends Component {
  renderEvent(event) {
    return <Event {...event}/>
  }

  render() {
    const eventActions = this.props.eventActions;
    return (
      <div className='container'>
        <EventForm onSubmit={eventActions.add}/>
        {this.props.events.map(this.renderEvent)}
      </div>
    );
  }
}

export default Timeline;
