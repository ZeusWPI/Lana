import { createAction } from 'redux-actions';
import { groupsChannel } from '../channels';
import { publishedAction } from './utils';

export const addGroup = publishedAction(groupsChannel, 'add_group');
export const joinGroup = publishedAction(groupsChannel, 'join_group');

