import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timeline from '../components/timeline';
import { addEvent } from '../actions/events';

function props(state) {
  const { timeline, data } = state;
  return {
    events: timeline.map(id => data.events.get(id))
  };
}

function actions(dispatch){
  const eventActions = {
    add: e => {
      console.log(e);
      dispatch(addEvent(e));
    }
  }
  return { eventActions };
}

export default connect(props, actions)(Timeline);
