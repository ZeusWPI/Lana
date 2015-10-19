import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';
import Timeline from './containers/timeline';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Timeline}/>
  </Route>
);
