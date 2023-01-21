import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import moviesReducer from "../reducers/moviesReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer
  },
})

export default store;