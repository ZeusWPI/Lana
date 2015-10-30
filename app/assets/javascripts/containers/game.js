import { connect } from 'react-redux';
import Game from '../components/game';
import { addEvent } from '../actions/events';
import { addGroup, joinGroup, leaveGroup } from '../actions/groups.js';


function props(state){
  const { current_user, data } = state;
  const { id } = state.router.params;

  const username = user_id => data.users.getIn([user_id, 'name'])
  if (current_user) {
    const joined = group => group.get('members').includes(current_user.id)
  } else {
    const joined = group => false
  }
  
  const groups = data.groups.map(
    group => group.set('joined', group.get('members').includes(current_user.id))
                  .update('members', ms => ms.map(username))
  ).toIndexedSeq().toJS();
  const events = data.events.toList().toJS();

  return {
    1: {
      title: 'Geweren en Explosies 24',
      image_url: 'http://fotodes.ru/upload/img1342258123.jpg',
      groups: [],
      events: []
    },
    2: {
      title: 'Dota 2',
      image_url: 'http://1.bp.blogspot.com/-GplgZlvkXSc/Uk_3BipvAlI/AAAAAAAAAJE/NIU9Sm2vSVU/s1600/Dota2-Filled.png',
      groups: [],
      events: []
    },
    3: {
      title: 'Dota 3',
      image_url: 'http://1.bp.blogspot.com/-GplgZlvkXSc/Uk_3BipvAlI/AAAAAAAAAJE/NIU9Sm2vSVU/s1600/Dota2-Filled.png',
      groups: [],
      events: []
    },
    4: {
      title: 'Dota 4',
      image_url: 'http://1.bp.blogspot.com/-GplgZlvkXSc/Uk_3BipvAlI/AAAAAAAAAJE/NIU9Sm2vSVU/s1600/Dota2-Filled.png',
      groups: [],
      events: []
    }
  }[id];
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
