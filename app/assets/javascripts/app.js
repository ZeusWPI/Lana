import React from 'react';
import App from './components/app';
import store from './store';
import { addEvent } from './actions/events';
require('./channels');


$(document).ready(function(){
  React.render(
    <App store={store}/>,
    document.getElementById('react-root')
  );
});
