import Immutable from 'immutable';
import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
// messages
export const addMessage = createAction('add_message');

// events
export const receiveEvents = createAction('receive_events');

export function fetchEvents(){
  return dispatch =>
    fetch('/events.json')
      .then(response => response.json())
      .then(json => json.data.map(obj => obj.attributes))
      .then(events => dispatch(receiveEvents(events)))
};
