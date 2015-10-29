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

const receive_models = (state, action) =>
  Immutable.fromJS(action.payload).reduce(
    (map, model) => map.set(model.get('id'), model),
    Immutable.Map());

const add_model = (state, action) =>
    state.set(action.payload.id, Immutable.fromJS(action.payload));

const events = handleActions({
  receive_events: receive_models,
  add_event: add_model
}, Immutable.Map());

const games = handleActions({
  receive_games: receive_models,
  add_game: add_model
}, Immutable.Map());

const users = handleActions({
  receive_users: receive_models,
  add_user: add_model
}, Immutable.Map());

const groups = handleActions({
  receive_groups: receive_models,
  add_group: add_model,
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
}, Immutable.Map());

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
