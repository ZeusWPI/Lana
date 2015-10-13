import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
var Actions = require('./actions');

const messages = handleActions({
  add_message: (state, action) => (
    state.push(action.payload)
  )
}, Immutable.List());

const events = handleActions({
  receive_events: (state, action) => (
      Immutable.List(action.payload)
  )
}, Immutable.List());

const reducer = combineReducers({
  messages,
  events
});

export default reducer;
