import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { routerStateReducer as router } from 'redux-router';
import Immutable from 'immutable';

const messages = handleActions({
  add_message: (state, action) => (
    state.push(action.payload)
  )
}, Immutable.List());

const groups = handleActions({
  receive_groups: (state, action) => (
    Immutable.List(action.payload)
  )
}, Immutable.List());

const current_user = handleActions({
  login: (state, action) => action.payload
}, null);

const modelActions = {
  receive: (state, action) =>
    action.payload.reduce(
      (map, model) => map.set(model.id, model),
      Immutable.Map()),
  add: (state, action) =>
    state.set(action.payload.id, action.payload)
};

function postfixKeys(obj, postfix) {
  var newObj = {};
  for (let key in obj) {
    newObj[key+postfix] = obj[key]
  }
  return newObj;
}

function modelReducer(name, additionalActions) {
  return handleActions(
    {...additionalActions, ...postfixKeys(modelActions, '_'+name)},
    Immutable.Map()
  );
}

const events = modelReducer('events');

const data = combineReducers({
  events,
  groups
});

const timeline = handleActions({
  receive_events: (state, action) =>
    Immutable.List(action.payload.map(e => (e.id)))
      .sortBy(e => e.moment),
  add_event: (state, action) =>
    (state.push(action.payload.id).sortBy(e => e.moment))
}, Immutable.List());

export default combineReducers({
  data,
  timeline,
  messages,
  groups,
  current_user,
  router
});
