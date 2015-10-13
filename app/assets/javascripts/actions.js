import Immutable from 'immutable';
import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
// messages
export const addMessage = createAction('add_message');

// events
export const receiveEvents = createAction('receive_events');
