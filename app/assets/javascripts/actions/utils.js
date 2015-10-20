import { createAction } from 'redux-actions';

export function publishedAction(channel, name) {
  let creator = createAction(name);
  return payload => () => channel.publish(creator(payload));
}
