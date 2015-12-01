import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';
import Timeline from './containers/timeline';
import Game from './containers/game';
import User from './containers/user';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Timeline}/>
    <Route path="game/:id" component={Game}/>
    <Route path="user" component={User}/>
  </Route>
);
