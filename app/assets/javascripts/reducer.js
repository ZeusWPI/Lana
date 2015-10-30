import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { routerStateReducer as router } from 'redux-router';
import Immutable from 'immutable';
import Cookies from 'js-cookie';

const messages = handleActions({
  add_message: (state, action) => (
    state.push(action.payload)
  )
}, Immutable.List());

const current_user = handleActions({
  login: (state, action) => {
    const { id, token} = action.payload;
    Cookies.set('token', token, {expires: 2});
    return { id, token };
  }
}, null);


const modelActions = {
  receive: (state, action) =>
    Immutable.fromJS(action.payload).reduce(
      (map, model) => map.set(model.get('id'), model),
      Immutable.Map()),

  upsert: (state, action) =>
    state.set(action.payload.id, Immutable.fromJS(action.payload)),

  delete: (state, action) =>
    state.delete(action.payload)
}

function prefix_keys(obj, prefix) {
  var newObj = {};
  for (let key in obj){
    newObj[prefix+key] = obj[key]
  }
  return newObj;
}

function modelReducer(name, extraActions) {
  return handleActions(
    {...extraActions, ...prefix_keys(modelActions, name+'#')},
    Immutable.Map()
  );
}

const events = modelReducer('event');
const games = modelReducer('game');
const users = modelReducer('user');
const groups = modelReducer('group', {
  join_group: (state, action) => {
    let { group, user } = action.payload;
    return state.updateIn([group, 'members'], ms => ms.push(user));
  },
  leave_group: (state, action) => {
    let { group, user } = action.payload;
    return state.updateIn(
      [group, 'members'], ms => ms.delete(ms.indexOf(user))
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
