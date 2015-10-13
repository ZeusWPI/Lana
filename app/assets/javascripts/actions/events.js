import { createAction } from 'redux-actions';
import { eventsChannel } from '../channels';

const publish = creator => payload => () => {
  let action = creator(payload);
  eventsChannel.publish(action);
};

export const addEvent = publish(createAction('add_event'));

export const receiveEvents = createAction('receive_events');
