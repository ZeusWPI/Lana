import { publishedActions } from './utils';

export default publishedActions({
  addGroup: 'group#upsert',
  joinGroup: 'group#join',
  leaveGroup: 'group#leave'
});
