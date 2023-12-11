import {
  SET_INGREDIENT_DETAILS,
  CLEAR_INGREDIENT_DETAILS,
} from "../actions/current-ingredient-actions";

const initialState = {
  details: null,
};

function ingredientDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case CLEAR_INGREDIENT_DETAILS:
      return {
        ...state,
        details: null,
      };
    default:
      return state;
  }
}

export default ingredientDetailsReducer;
