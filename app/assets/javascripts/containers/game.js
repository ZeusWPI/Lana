import { connect } from 'react-redux';
import Game from '../components/game';
import { addEvent } from '../actions/events';
import { addGroup, joinGroup, leaveGroup } from '../actions/groups.js';


function props(state){
  const { current_user, users, games, groups, events} = state;
  const { game_id } = state.router.params;

  const username = user_id => users.getIn([user_id, 'name'])
  const joined = group => group.get('members').includes(current_user.id)

  const game = games.toJS()[game_id]; // dafuq?

    const game_groups = groups.filter(g => g.get('game_id') == game_id)
      .map( group => group.set('joined',
                           group.get('members').includes(current_user.id))
                      .update('members', ms => ms.map(username))
    ).toIndexedSeq().toJS();

  const game_events = events.toList()
                      .filter(e => e.get('game_id') == game_id).toJS();

  return {
    ...game,
    groups: game_groups,
    events: game_events,
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
