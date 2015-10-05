import { createStore } from 'redux';
import { reduce } from './reducer';
import { addMessage } from './actions';
import Chat from './components/chat';

store.dispatch(addMessage({author: 'Felix', contents: 'hoi ik ben felix'}));

$(document).ready(function(){
  React.render(
    <Chat/>,
    document.getElementById('hello-div')
  );
});
