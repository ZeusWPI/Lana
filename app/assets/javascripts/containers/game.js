import { connect } from 'react-redux';
import Game from '../components/game';
import { addEvent } from '../actions/events';
import { addGroup, joinGroup, leaveGroup } from '../actions/groups.js';


function props(state){
  const { current_user, data, timeline} = state;
  const { id } = state.router.params;

  const username = user_id => data.users.getIn([user_id, 'name'])
  const joined = group => group.get('members').includes(current_user.id)

  const game = data.games.toJS()[id]; // dafuq?

  const groups = data.groups.filter(g => g.get('game_id') == id).map(
    group => group.set('joined', group.get('members').includes(current_user.id))
                  .update('members', ms => ms.map(username))
  ).toIndexedSeq().toJS();

  const events = timeline
    .map(id => data.events.get(id))
    .filter(e => e.get('game_id') == id).toJS();

  return {
    ...game,
    groups,
    events,
    current_user
  };
}

function actions(dispatch){
  return {
    eventActions: {
      add: e => dispatch(addEvent(e))
    },
    groupActions: {
      add: e => dispatch(addGroup(e)),
      join: e => dispatch(joinGroup(e)),
      leave: e => dispatch(leaveGroup(e))
    }
  };
}
export default connect(props, actions)(Game);
