import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reduce } from './reducer';
import { addMessage } from './actions';
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
  setInterval(
    () => store.dispatch(addMessage({author: 'Felix', contents: 'hoi ik ben felix'})),
    1000
  );
});
