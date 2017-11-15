import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST
} from '../constants';

import { convertAlbums, convertAlbum, convertSongs } from '../utils';

const initialState = {
  list: [],
  selected: {}
};

export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      newState.list = action.playlists;
      break;

    case RECEIVE_PLAYLIST:
      newState.selected = action.playlist;
      newState.selected.songs = convertSongs(action.playlist.songs);
      break;

    default:
      return state;
  }

  return newState;
};
