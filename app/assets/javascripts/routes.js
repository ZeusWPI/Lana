import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';
import User from './containers/user';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={User}/>
  </Route>
);
