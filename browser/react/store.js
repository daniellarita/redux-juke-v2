import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import {loggerMiddleware, createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {combineReducers} from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';

const middleware = applyMiddleware(
  createLogger(),
  thunkMiddleware
);

const reducers = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
});

export default createStore(reducers, middleware);
