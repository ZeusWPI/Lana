import React, { Component } from 'react';

class Event extends Component {
  render() {
    const event=this.props.event;
    const time=moment(event.moment).calendar();
    return (
      <div className='event panel panel-default'>
        <div className='panel-body'>
          <div className='header'>
            <div className='name'>{event.name}</div>
            <div className='time'>{time}</div>
          </div>
          <div className='description'>{event.description}</div>
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
