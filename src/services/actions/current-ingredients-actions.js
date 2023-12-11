import { v4 as uuidv4 } from 'uuid';
export const ADD_CURRENT_BUN = "ADD_CURRENT_BUN";
export const ADD_CURRENT_INGREDIENT = "ADD_CURRENT_INGREDIENT";
export const REMOVE_CURRENT_INGREDIENT = "REMOVE_CURRENT_INGREDIENT";
export const CLEAR_CURRENT_INGREDIENTS = "CLEAR_CURRENT_INGREDIENTS";
export const MOVE_FILLING = "MOVE_FILLING"

export const addCurrentBun = (ingredient) => {
  return {
    type: ADD_CURRENT_BUN,
    payload: ingredient,
  };
};

export const addCurrentIngredient = (ingredient) => {
  const newIngredient = { ...ingredient, key: uuidv4() };
  return {
    type: ADD_CURRENT_INGREDIENT,
    payload: newIngredient,
  };
};

export const removeCurrentIngredient = (ingredient) => {
  return {
    type: REMOVE_CURRENT_INGREDIENT,
    payload: ingredient,
  };
};

export const clearCurrentIngredients = () => {
  return {
    type: CLEAR_CURRENT_INGREDIENTS,
  };
};

export function moveFilling(ingredient) {
  return {type: MOVE_FILLING, payload: ingredient}
}