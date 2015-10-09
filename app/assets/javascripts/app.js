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
  store.dispatch(fetchEvents());
});
