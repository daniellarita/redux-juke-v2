import {
  RECEIVE_ARTISTS,
  RECEIVE_ARTIST
} from '../constants';

import { convertAlbums, convertSongs } from '../utils';

const initialState = {
  list: [],
  selected: {}
};

export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ARTISTS:
      newState.list = action.artists;
      break;

    case RECEIVE_ARTIST:
      action.artist.albums = convertAlbums(action.albums);
      action.artist.songs = convertSongs(action.songs);
      newState.selected = action.artist;
      break;

    default:
      return state;
  }

  return newState;
};
