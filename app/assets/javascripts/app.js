import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reduce } from './reducer';
import App from './components/app';

let store = createStore(reduce);

let unsubscribe = store.subscribe(
  () => console.log(store.getState().toArray())
);

$(document).ready(function(){
  React.render(
    <App store={store}/>,
    document.getElementById('hello-div')
  );
});
