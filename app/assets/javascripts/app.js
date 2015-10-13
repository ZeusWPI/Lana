import Immutable from 'immutable';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { fetchEvents } from './actions';
import thunk from 'redux-thunk';
import reducer from './reducer';
import App from './components/app';

let store = applyMiddleware(thunk)(createStore)(reducer);

$(document).ready(function(){
  React.render(
    <App store={store}/>,
    document.getElementById('react-root')
  );
  let cable = Cable.createConsumer('ws://127.0.0.1:28080');

  window.chan = cable.subscriptions.create("EventsChannel", {
    connected: () => console.log('connected'),
    disconnected: () => console.log('disconnected'),
      received: action => {
        console.log(action);
        store.dispatch(JSON.parse(action))
      }
  });

  window.test_event = {
    name: 'test',
    description: 'als je dit ziet, dan werkt shit',
    moment: moment()
  };

  window.test_action = {
    type: 'add_event',
    payload: window.test_event
  };
});

