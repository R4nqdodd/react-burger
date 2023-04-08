import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import { TAuthAction } from '../actions/auth';
import { TBurgerConstructorAction } from '../actions/burger-constructor';
import { TBurgerIngredientsAction } from '../actions/burger-ingredients';
import { TCurrentIngredientAction } from '../actions/current-ingredient';
import { TModalAction } from '../actions/modal';
import { TOrderAction } from '../actions/order';
import { TWSAction } from '../actions/ws';

export type TApplicationActions =
  | TAuthAction
  | TBurgerConstructorAction
  | TBurgerIngredientsAction
  | TCurrentIngredientAction
  | TModalAction
  | TOrderAction
  | TWSAction;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;