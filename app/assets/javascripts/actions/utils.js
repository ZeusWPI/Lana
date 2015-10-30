import { createAction } from 'redux-actions';
import channel from '../channel';

export function publishedAction(name) {
  let creator = createAction(name);
  return payload => () => channel.publish(creator(payload));
}

export function publishedActions(hash) {
  var actions = {};
  for (let key in hash){
    actions[key] = publishedAction(channel, hash[key]);
  }
  return actions;
}
