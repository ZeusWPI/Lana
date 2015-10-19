import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { routerStateReducer as router } from 'redux-router';
import Immutable from 'immutable';

const messages = handleActions({
  add_message: (state, action) => (
    state.push(action.payload)
  )
}, Immutable.List());

const events = handleActions({
  add_event: (state, action) => (
    state.push(action.payload)
  ),
  receive_events: (state, action) => (
      Immutable.List(action.payload)
  )
}, Immutable.List());

const reducer = combineReducers({
  messages,
  events,
  router
});

export default reducer;
