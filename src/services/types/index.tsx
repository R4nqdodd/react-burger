import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import { TAuthAction } from '../actions/auth';
import { TBurgerConstructorAction } from '../actions/burger-constructor';
import { TBurgerIngredientsAction } from '../actions/burger-ingredients';
import { TCurrentIngredientAction } from '../actions/current-ingredient';
import { TModalAction } from '../actions/modal';
import { TOrderAction } from '../actions/order';
import { TWSAction } from '../actions/ws';
import { TypedUseSelectorHook, useSelector as selector, useDispatch as dispatch } from 'react-redux';

export type TApplicationActions =
  | TAuthAction
  | TBurgerConstructorAction
  | TBurgerIngredientsAction
  | TCurrentIngredientAction
  | TModalAction
  | TOrderAction
  | TWSAction;


export type TRootState = ReturnType<typeof store.getState>;
export type TAppThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, TApplicationActions>; 
export type TAppDispatch = ThunkDispatch<TRootState, never, TApplicationActions>;

export const useDispatch = () => dispatch<TAppDispatch>(); 
export const useSelector: TypedUseSelectorHook<TRootState> = selector;
