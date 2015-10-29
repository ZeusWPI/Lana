import { connect } from 'react-redux';
import Game from '../components/game';
import { addEvent } from '../actions/events';

function props(state){
  return {
    title: 'Geweren en Explosies 24',
    image_url: 'http://fotodes.ru/upload/img1342258123.jpg',
    groups: state.groups.toList().toJS(),
    events: state.events.toList().toJS()
  };
}

function actions(dispatch){
  return {
    eventActions: {
      add: e => dispatch(addEvent(e))
    }
  };
}
export default connect(props, actions)(Game);
