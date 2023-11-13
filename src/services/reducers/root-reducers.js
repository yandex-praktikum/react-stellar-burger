import { combineReducers } from 'redux';
import ingredientReducer from './ingredient-reducer';
import currentIngredientsReducer from './current-ingredients-reducer';
import currentIngredientReducer from './current-ingredient-reducer';
import orderReducer from './order-reducer';

const rootReducer = combineReducers({
  allIngredients: ingredientReducer,
  currentIngredients: currentIngredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
});

export default rootReducer;