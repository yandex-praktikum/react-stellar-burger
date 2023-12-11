import {
  ADD_CURRENT_BUN,
  ADD_CURRENT_INGREDIENT,
  REMOVE_CURRENT_INGREDIENT,
  CLEAR_CURRENT_INGREDIENTS,
  MOVE_FILLING,
} from "../actions/current-ingredients-actions";

const initialState = { bun: null, other: [] };

const currentIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_BUN:
      return {
        ...state,
        bun: action.payload,
      };
    case ADD_CURRENT_INGREDIENT:
      const newIngredient = {
        ...action.payload,
      };
      return {
        ...state,
        other: [...state.other, newIngredient],
      };
    case REMOVE_CURRENT_INGREDIENT:
      return {
        ...state,
        other: state.other.filter((item) => item.key !== action.payload.key),
      };
    case CLEAR_CURRENT_INGREDIENTS:
      return {
        ...state,
        bun: null,
        other: [],
      };
    case MOVE_FILLING:
      return {
        ...state,
        other: action.payload,
      };
    default:
      return state;
  }
};

export default currentIngredientsReducer;
