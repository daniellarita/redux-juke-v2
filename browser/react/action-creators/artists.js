import {
  RECEIVE_ARTISTS,
  RECEIVE_ARTIST,
} from '../constants';
import axios from 'axios';

const receiveArtists = (artists) => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const fetchArtists = () => (dispatch) => {
  axios.get('/api/artists/')
    .then(res => res.data)
    .then(artists => dispatch(receiveArtists(artists)));
};
