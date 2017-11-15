import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
} from '../constants';
import axios from 'axios';

const receivePlaylists = (playlists) => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const fetchPlaylists = () => (dispatch) => {
  axios.get('/api/playlists/')
    .then(res => res.data)
    .then(playlists => dispatch(receivePlaylists(playlists)));
};
