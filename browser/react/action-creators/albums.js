import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM,
} from '../constants';
import axios from 'axios';

const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const fetchAlbums = () => (dispatch) => {
  axios.get('/api/albums/')
    .then(res => res.data)
    .then(albums => dispatch(receiveAlbums(albums)));
};
