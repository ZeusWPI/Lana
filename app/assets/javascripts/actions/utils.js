import { createAction } from 'redux-actions';

export function publishedAction(channel, name) {
  let creator = createAction(name);
  return payload => () => channel.publish(creator(payload));
}

export function publishedActions(channel, hash) {
  var actions = {};
  for (let key in hash){
    actions[key] = publishedAction(channel, hash[key]);
  }
  return actions;
}
