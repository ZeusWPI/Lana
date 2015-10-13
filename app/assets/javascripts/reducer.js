import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
var Actions = require('./actions');

const messages = handleActions({
  ADD_MESSAGE: (state, action) => (
    state.push(action.payload)
  )
}, Immutable.List());

const events = handleActions({
  RECEIVE_EVENTS: (state, action) => (
      Immutable.List(action.payload)
  )
}, Immutable.List());

const reducer = combineReducers({
  messages,
  events
});

export default reducer;
