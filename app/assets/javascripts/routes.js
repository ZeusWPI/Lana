import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';
import Timeline from './containers/timeline';
import Game from './containers/game';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Game}/>
  </Route>
);
