import { combineReducers } from 'redux';
import Immutable from 'immutable';
var Actions = require('./actions');

const emptyList=Immutable.List();

function messages(state=emptyList, action) {
  switch (action.type) {
    case Actions.ADD_MESSAGE:
      return state.push(action.payload);
    default:
      return state;
  }
}

function events(state=emptyList, action) {
  switch (action.type) {
    case Actions.RECEIVE_EVENTS:
      return Immutable.List(action.payload);
    default:
      return state;
  }
}

const reducer = combineReducers({
  messages,
  events
});

export default reducer;
