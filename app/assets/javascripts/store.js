import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

const store = applyMiddleware(thunk)(createStore)(reducer);
export default store;
