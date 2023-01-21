import { AUTH_USER, SIGNOUT, REG_USER, AUTH_CHECK, IS_LOADING_TRUE, IS_LOADING_FALSE, USER_EDIT, GET_MOVIES } from '../types';
import api from '../../utils/api';

// Actions
export const authUser = (payload) => ({type: AUTH_USER, payload});
export const regUser = (payload) => ({type: REG_USER, payload});
export const signOut = () => ({type: SIGNOUT});
export const authCheck = (payload) => ({type: AUTH_CHECK, payload});
export const isLoadingTrue = () => ({type: IS_LOADING_TRUE});
export const isLoadingFalse = () => ({type: IS_LOADING_FALSE});
export const userChange = (payload) => ({type: USER_EDIT, payload});
export const getMovies = (payload) => ({type: GET_MOVIES, payload});

// Creators

// Auth
export const authUserAction = (user) => (dispatch) => {
  api.authUser(user).then((res) => {
    dispatch(authUser(res.data));
  });
}
export const regUserAction = (user) => (dispatch) => {
  api.regUser(user).then((res) => dispatch(regUser(res.data)));
}
export const authCheckAction = () => (dispatch) => {
  api.authCheck().then((res) => {
    dispatch(authCheck(res.data))
    dispatch(isLoadingFalse());
  })
  .catch(err => {
    console.log(`Error authorization ${err}`);
    dispatch(isLoadingFalse());
  })
}
export const userChangeAction = (user) => (dispatch) => {
  api.changeUser(user).then((res) => {
    dispatch(userChange(res.data))
  })
  .catch(err => {
    console.log(`Error authorization ${err}`);
  })
}
export const signOutAction = () => (dispatch) => {
  api.signOut().then(() => dispatch(signOut()));
}

// Requests
export const isLoadingTrueAction = () => (dispatch) => {
  dispatch(isLoadingTrue());
}
export const isLoadingFalseAction = () => (dispatch) => {
  dispatch(isLoadingFalse());
}

// Data
export const getMoivesAction = () => (dispatch) => {
  api.getMovies().then(res => {
    dispatch(getMovies(res.data))
  })
  .catch(err => {
    console.log(err);
  })
}