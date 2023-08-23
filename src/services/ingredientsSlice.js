import { createSlice } from "@reduxjs/toolkit";
import { createOrderRequest, getIngredientsRequest } from "../utils/api";
import { v4 as generateUniqueId } from "uuid";

const newIngredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    list: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    createdOrder: null,

    chosenIngredients: [],
    orderFailed: false,
    orderRequest: false,
  },
  reducers: {
    getIngredientRequest(state) {
      state.ingredientsRequest = true;
    },
    getIngredientsSuccess(state, action) {
      state.ingredientsFailed = false;
      state.ingredientsRequest = false;
      state.list = action.payload;
    },
    getIngredientsFailed(state) {
      state.ingredientsFailed = true;
      state.ingredientsRequest = true;
    },
    getCreatedOrder(state) {
      state.orderRequest = true;
      state.orderFailed = false;
    },
    getCreatedOrderSuccess(state, action) {
      state.orderRequest = false;
      state.createdOrder = action.payload;
    },
    getCreatedOrderFailed(state) {
      state.orderRequest = false;
      state.orderFailed = true;
    },
    sortConstructorIngredients(state, action) {
      const dragCard = state.chosenIngredients[action.payload.dragIndex];
      state.chosenIngredients.splice(action.payload.dragIndex, 1);
      state.chosenIngredients.splice(action.payload.hoverIndex, 0, dragCard);
    },
    deleteIngredient(state, action) {
      state.chosenIngredients = state.chosenIngredients.filter(
        (item, index) => index !== action.payload
      );
    },

    addIngredient(state, action) {
      const targetIngredient = {
        ...state.list.find(
          (ingredient) => ingredient._id === action.payload.id
        ),
      };

      targetIngredient.uuid = generateUniqueId();

      if (targetIngredient.type === "bun") {
        state.chosenIngredients = state.chosenIngredients.filter(
          ({ type }) => type !== "bun"
        );
        state.chosenIngredients.push(targetIngredient);
      } else {
        state.chosenIngredients.push(targetIngredient);
      }
    },
  },
});

export const newIngredientsSliceReducer = newIngredientsSlice.reducer;

export const {
  getIngredientRequest,
  getIngredientsSuccess,
  getIngredientsFailed,
  deleteIngredient,
  sortConstructorIngredients,
  addIngredient,
  getCreatedOrder,
  getCreatedOrderSuccess,
  getCreatedOrderFailed,
} = newIngredientsSlice.actions;

// Thunk function
export function getIngredients() {
  return function (dispatch) {
    dispatch(getIngredientRequest());
    return getIngredientsRequest().then((res) => {
      if (res && res.success) {
        dispatch(getIngredientsSuccess(res.data));
      } else {
        dispatch(getIngredientsFailed());
      }
    });
  };
}
export function sendOrder(ingredientsId) {
  return async function (dispatch) {
    dispatch(getCreatedOrder());

    const res = await createOrderRequest(ingredientsId);

    if (res && res.success) {
      console.log(res);
      dispatch(getCreatedOrderSuccess(res));
    } else {
      dispatch(getCreatedOrderFailed());
    }
  };
}
