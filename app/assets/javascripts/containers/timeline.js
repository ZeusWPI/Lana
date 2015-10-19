import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from '../components/event';

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

function select(state) {
  const { events } = state;
  return { events };
}

export default connect(select)(Timeline);
