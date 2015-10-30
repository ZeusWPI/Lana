import { connect } from 'react-redux';
import User from '../components/user';
import { login, register } from '../actions/authentication';

function props(state) {
  const { current_user, data } = state;
  if (current_user){
    return {
      user: {
        ...current_user,
        ...data.users.get(current_user.id).toJS()
      }
    };
  }
  return {};
}

function actions(dispatch) {
  return {
    authActions: {
      login: e => dispatch(login(e)),
      register: e => dispatch(register(e))
    }
  };
}

export default connect(props, actions)(User);
