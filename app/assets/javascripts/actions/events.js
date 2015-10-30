import { createAction } from 'redux-actions';
import { eventsChannel } from '../channels';
import { publishedAction } from './utils';

export const addEvent = publishedAction(eventsChannel, 'event#upsert');
