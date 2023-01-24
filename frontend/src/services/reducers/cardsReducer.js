import {
  GET_MOVIES,
  GET_FILTER,
  RESET_LIST,
  LIKE_TOGGLE
} from '../types';

const initialState = {
  cards: [],
  categoryList: [],
  favorite: [],
  isLoading: false,
};

export default function cardsReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        cards: payload.map(el => ({...el, isLike: false}))
      }
    case GET_FILTER:
      return {
        ...state,
        categoryList: payload.map(el => ({...el, isLike: false}))
      }
    case RESET_LIST:
      return {
        ...state,
        categoryList: [],
      }
    case LIKE_TOGGLE:
      return {
        ...state,
        categoryList: state.categoryList.map((card) => ({
          ...card, isLike: card.id === payload.id ? payload.isLike : card.isLike
        })
        // categoryList: state.categoryList.map((card) => {
        //   if (card.id === payload.id) {
        //     return ({...card, isLike: !card.isLike})
        //   } else {
        //     return card
        //   }
        // })
        )}
    default:
      return state;
  }
}