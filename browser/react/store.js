import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import {loggerMiddleware, createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {combineReducers} from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import albumsReducer from './reducers/albums-reducer';
import artistsReducer from './reducers/artists-reducer';
import playlistsReducer from './reducers/playlists-reducer';

const middleware = applyMiddleware(
  createLogger(),
  thunkMiddleware
);

const reducers = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer,
  albums: albumsReducer,
  artists: artistsReducer,
  playlists: playlistsReducer
});

export default createStore(reducers, middleware);
