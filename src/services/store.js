import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { newIngredientsSliceReducer } from "./ingredientsSlice";
import { modalSliceReducer } from "./modalSlice";

const rootReducer = combineReducers({
  ingredients: newIngredientsSliceReducer,
  modal: modalSliceReducer,
});

export const store = configureStore({ reducer: rootReducer, devTools: true });
