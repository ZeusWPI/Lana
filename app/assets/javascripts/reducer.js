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

const groups = handleActions({
  receive_groups: (state, action) => (
    // TODO Replace again when unstubbing
    // Immutable.List(action.payload)
    Immutable.List([{game: {name: "Dota"}, users: [1, 2, 3], max_users: 5, notes: "Hallo."}])
  )
}, Immutable.List());

const current_user = handleActions({
  login: (state, action) => action.payload
}, null);

export default combineReducers({
  messages,
  events,
  groups,
  current_user,
  router
});
