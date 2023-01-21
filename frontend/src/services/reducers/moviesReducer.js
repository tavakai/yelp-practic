import {
  GET_MOVIES
} from '../types';

const initialState = {
  movies: [],
  favorite: []
};

export default function moviesReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: [...payload]
      }
    default:
      return state;
  }
}