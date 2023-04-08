import { combineReducers } from 'redux';

import { ingredientsConstructorReducer } from './burger-constructor';
import { burgerIngredientsReducer } from './burger-ingredients';
import { currentIngredientReducer } from './current-ingredient';
import { newOrderReducer } from './order';
import { modalReducer } from './modal';
import { authReducer } from './auth';
import { wsReducer } from './ws';

export const rootReducer = combineReducers({
  constructor: ingredientsConstructorReducer,
  burgerIngredients: burgerIngredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: newOrderReducer,
  modal: modalReducer,
  auth: authReducer,
  orders: wsReducer
})