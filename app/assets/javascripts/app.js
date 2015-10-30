import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import store from './store';
import { addEvent } from './actions/events';
import { login } from './actions/authentication';
import { ReduxRouter } from 'redux-router';
import { Provider } from 'react-redux';

import Cookies from 'js-cookie';


$(document).ready( () => {
  render(
    <Provider store={store}>
      <ReduxRouter />
    </Provider>,
    document.getElementById('root')
  );
});

window.test_event = addEvent({
  name: 'hoi',
  description: '123',
  moment: moment()
});

window.dispatch = store.dispatch;
window.login = credentials => store.dispatch(login(credentials));
window.getState = store.getState

window.getToken = () => Cookies.get('token');
window.setToken = (val) => Cookies.set('token', val);
window.deleteToken = () => Cookies.remove('token');
