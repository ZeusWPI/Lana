import { publishedActions } from './utils';

export default publishedActions({
  addGroup: 'group#create',
  joinGroup: 'group#join',
  leaveGroup: 'group#leave'
});
