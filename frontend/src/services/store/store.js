import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import cardsReducer from "../reducers/cardsReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cards: cardsReducer,
  },
})

export default store;