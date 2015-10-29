import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { routerStateReducer as router } from 'redux-router';
import Immutable from 'immutable';

const messages = handleActions({
  add_message: (state, action) => (
    state.push(action.payload)
  )
}, Immutable.List());

const current_user = handleActions({
  login: (state, action) => action.payload
}, null);

const modelActions = {
  receive: (state, action) =>
    Immutable.fromJS(action.payload).reduce(
      (map, model) => map.set(model.get('id'), model),
      Immutable.Map()),
  add: (state, action) =>
    state.set(action.payload.id, Immutable.fromJS(action.payload))
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
const games = modelReducer('games');
const users = modelReducer('users');
const groups = modelReducer('groups', {
  join_group: (state, action) => {
    let { group, member } = action.payload;
    return state.update(
      member, g => g.update('members', ms => ms.push(member))
    );
  }
});


const data = combineReducers({
  events,
  groups,
  games,
  users
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
  current_user,
  router
});
