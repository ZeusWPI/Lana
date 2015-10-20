import { createAction } from 'redux-actions';
import { eventsChannel } from '../channels';
import { publishedAction } from './utils';

export const addEvent = publishedAction(eventsChannel, 'add_event');

export const receiveEvents = createAction('receive_events');
