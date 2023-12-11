import {
  FETCH_INGREDIENTS_REQUEST,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_FAILURE,
} from "../actions/ingredient-actions";

const initialState = {
  ingredients: [],
  isLoading: false,
  hasError: false,
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_INGREDIENTS_SUCCESS: {
      return { ...state, hasError: false, ingredients: action.payload, isLoading: false };
    }
    case FETCH_INGREDIENTS_FAILURE: {
      return { ...state, hasError: true, isLoading: false };
    }
    default: {
      return state;
    }
  }
};


export default ingredientReducer;
