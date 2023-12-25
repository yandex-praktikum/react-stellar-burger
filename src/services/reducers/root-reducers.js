import { combineReducers } from 'redux';
import ingredientReducer from './ingredient-reducer';
import currentIngredientsReducer from './current-ingredients-reducer';
import currentIngredientReducer from './current-ingredient-reducer';
import orderReducer from './order-reducer';
import { inputsReducer } from '../reducers/inputs-reducer';
import { userReducer } from '../reducers/user-reducer';

const rootReducer = combineReducers({
  allIngredients: ingredientReducer,
  currentIngredients: currentIngredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
  inputs: inputsReducer,
  user: userReducer
});

export default rootReducer;