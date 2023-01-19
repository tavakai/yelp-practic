import { AUTH_CHECK, AUTH_USER, REG_USER, SIGNOUT, IS_LOADING_TRUE, IS_LOADING_FALSE, USER_EDIT } from "../types";

const initialState = {
  isLoggedIn: false,
  user: {
    name: '',
    email: ''
  },
  isLoading: true,
}

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REG_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: {
          ...state.user,
          name: payload.name,
          email: payload.email
        }
      }
    case AUTH_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: {
          ...state.user,
          name: payload.name,
          email: payload.email
        }
      }
    case AUTH_CHECK:
      return {
        ...state,
        isLoggedIn: true,
        user: {
          ...state.user,
          name: payload.name,
          email: payload.email
        },
      }
    case USER_EDIT:
      return {
        ...state,
        user: {
          ...state.user,
          name: payload.name,
          email: payload.email
        },
      }
    case SIGNOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {
          ...state.user,
          name: '',
          email: ''
        }
      }
    case IS_LOADING_FALSE:
      return {
        ...state,
        isLoading: false
      }
    case IS_LOADING_TRUE:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state;
  }
};
