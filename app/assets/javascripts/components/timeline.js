import React, { Component } from 'react';

class Event extends Component {
  render() {
    const event=this.props.event;
    const time=moment(event.moment).calendar();
    return (
      <div className='panel panel-default'>
        <div className='panel-body'>
          <span>{event.name}</span>
          <span>{time}</span>
        </div>
      </div>
    );
  }
}

class Timeline extends Component {
  render() {
    return (
      <div>
        {this.props.events.map(
          event => <Event event={event}/>
        )}
      </div>
    );
  }
}

export default Timeline;
