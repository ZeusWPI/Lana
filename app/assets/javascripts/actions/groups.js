import { createAction } from 'redux-actions';
import { groupsChannel } from '../channels';
import { publishedActions } from './utils';

export default publishedActions(groupsChannel, {
  addGroup: 'group#upsert',
  joinGroup: 'group#join',
  leaveGroup: 'group#leave'
});
