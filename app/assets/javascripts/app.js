import Immutable from 'immutable';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import App from './components/app';

const initialState = {
  events: Immutable.List([
    {name: 'hallo', date: Date.now()+1000},
    {name: 'hai', date: Date.now()+2000}
  ])
};

let store = applyMiddleware(thunk)(createStore)(reducer, initialState);

$(document).ready(function(){
  React.render(
    <App store={store}/>,
    document.getElementById('hello-div')
  );
});
