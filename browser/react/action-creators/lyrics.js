import {SET_LYRICS} from '../constants';
import axios from 'axios';

// Action creators are functions that can (possibly) take information and return objects that are formatted to be sent into the Redux state. These objects are called actions (thus having been created) and almost always have a type property that describe what type of action they are.

export const setLyrics = function (text) {
  return {
    type: SET_LYRICS,
    lyric: text
  };
};

export const fetchLyrics = function (artist, song) {
  // redux thunk allows you to return an async function
  return function (dispatch, getState) {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      });
  };
};
