export const SET_INGREDIENT_DETAILS = 'SET_INGREDIENT_DETAILS';
export const CLEAR_INGREDIENT_DETAILS = 'CLEAR_INGREDIENT_DETAILS';

export function setIngredientDetails(ingredient) {
  return {
    type: SET_INGREDIENT_DETAILS,
    payload: ingredient,
  }
}

export function clearIngredientDetails() {
  return {
    type: CLEAR_INGREDIENT_DETAILS
  }
}