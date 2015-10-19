import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import store from './store';
import { addEvent } from './actions/events';
import { ReduxRouter } from 'redux-router';
import { Provider } from 'react-redux';
require('./channels');


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
