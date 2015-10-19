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

export default Event;
