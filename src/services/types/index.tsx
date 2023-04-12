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

/*Тип "Dispatch<TBurgerConstructorAction | TBurgerIngredientsAction | TCurrentIngredientAction | TOrderAction |
 TModalAction | TAuthAction | TWSAction> | AppThunk<...>" не удовлетворяет ограничению "Dispatch<AnyAction>".
  Тип "AppThunk<void>" не может быть назначен для типа "Dispatch<AnyAction>".
  Тип "ThunkAction<void, Action<any>, EmptyObject & { constructor: TBurgerConstructorState;
     burgerIngredients: TBurgerIngredientsState; ... 4 more ...; orders: TOrdersState; }, TApplicationActions>" не может быть назначен для типа "T".
  Возможно создание экземпляра "T" с произвольным типом, который может быть не связан с 
  "ThunkAction<void, Action<any>, EmptyObject & { constructor: TBurgerConstructorState; burgerIngredients: TBurgerIngredientsState; ... 4 more ...; orders: TOrdersState; },
   TApplicationActions>".ts(2344)
      */