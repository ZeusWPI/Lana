import React, { Component } from 'react';

class Event extends Component {
  render() {
    return (
      <div>
        <span>{this.props.time}</span>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

class Timeline extends Component {
  render() {
    return (
      <div>
        {this.props.events.map(
          event => <Event time={event.time} name={event.name}/>
        )}
      </div>
    );
  }
}

export default Timeline;
