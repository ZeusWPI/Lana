import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timeline from '../components/timeline';
import { addEvent } from '../actions/events';

function props(state) {
  const { events } = state;
  return {
    events: events.toList().toJS()
  };
}

function actions(dispatch){
  const eventActions = {
    add: e => {
      dispatch(addEvent(e));
    }
  }
  return { eventActions };
}

export default connect(props, actions)(Timeline);
