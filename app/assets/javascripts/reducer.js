import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { routerStateReducer as router } from 'redux-router';
import Immutable from 'immutable';
import Cookies from 'js-cookie';

const current_user = handleActions({
  'user#login': (state, action) => {
    const { id, token, admin } = action.payload;
    Cookies.set('token', token, {expires: 2});
    return { id, token, admin };
  }
}, null);


const modelActions = {
  receive: (state, action) =>
    Immutable.fromJS(action.payload).reduce(
      (map, model) => map.set(model.get('id'), model),
      Immutable.Map()),
  create: (state, action) =>
    state.set(action.payload.id, Immutable.fromJS(action.payload)),
  update: (state, action) =>
    state.set(action.payload.id, Immutable.fromJS(action.payload)),
  delete: (state, action) =>
    state.delete(action.payload)
};

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
  'membership#create': (state, action) => {
    let { group_id, user_id } = action.payload;
    return state.updateIn([group_id, 'members'], ms => ms.push(user_id));
  },
  'membership#delete': (state, action) => {
    let { group_id, user_id } = action.payload;
    return state.updateIn(
      [group_id, 'members'], ms => ms.delete(ms.indexOf(user_id))
    );
  }
});

const data = combineReducers({
  events,
  groups,
  games,
  users,
});

const chat = handleActions({
  'message#receive': (state, action) =>
    state.set(action.payload.group,
              Immutable.fromJS(action.payload.messages)),
  'message#create': (state, action) =>
    state.update(action.payload.group_id, ms => ms.push(action.payload))
}, Immutable.Map({null: []}));

const timeline = handleActions({
  'event#receive': (state, action) =>
    Immutable.List(action.payload.map(e => (e.id)))
      .sortBy(e => e.moment),
  'event#create': (state, action) =>
    (state.push(action.payload.id).sortBy(e => e.moment))
}, Immutable.List());

export default combineReducers({
  data,
  chat,
  timeline,
  current_user,
  router
});
