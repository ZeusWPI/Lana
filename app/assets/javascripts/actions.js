import Immutable from 'immutable';
import fetch from 'isomorphic-fetch';
// messages
export const ADD_MESSAGE = 'ADD_MESSAGE';

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: message
  };
}

// events
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

export function receiveEvents(events){
  return {
    type: RECEIVE_EVENTS,
    payload: events
  };
}

export function fetchEvents(){
  return dispatch =>
    fetch('/events.json')
      .then(response => response.json())
      .then(json => json.data.map(obj => obj.attributes))
      .then(events => dispatch(receiveEvents(events)))
};
