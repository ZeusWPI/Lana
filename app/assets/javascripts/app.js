import { createStore } from 'redux';
import { reduce } from './reducer';
import { addMessage } from './actions';
import Chat from './components/chat';

let store = createStore(reduce);

let unsubscribe = store.subscribe(
  () => console.log(store.getState().toArray())
);

store.dispatch(addMessage({author: 'Felix', contents: 'hoi ik ben felix'}));

$(document).ready(function(){
  React.render(
    <Chat/>,
    document.getElementById('hello-div')
  );
});
