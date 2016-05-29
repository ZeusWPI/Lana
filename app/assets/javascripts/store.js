import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';

import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import routes from './routes';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({routes, createHistory})
)(createStore);

export default finalCreateStore(reducer);
