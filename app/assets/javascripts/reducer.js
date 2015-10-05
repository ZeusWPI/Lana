var Immutable = require('immutable');
var Actions = require('./actions');

const initialState = Immutable.List();

export function reduce(state=initialState, action) {
  switch (action.type) {
    case Actions.ADD_MESSAGE:
      return state.push(action.payload);
    default:
      return state;
  }
}
