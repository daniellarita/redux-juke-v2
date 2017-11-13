import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import {loggerMiddleware, createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers/root-reducer';

const middleware = applyMiddleware(
  createLogger(),
  thunkMiddleware
);

export default createStore(reducer, middleware);
