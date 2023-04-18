import { DECREASE_COUNTER, INCREASE_COUNTER } from "../constants/burger-ingredients";
import { TIngredient } from "../../utils/types";
<<<<<<< HEAD
import { AppDispatch } from "../types";
=======
import { TAppDispatch } from "../types";
>>>>>>> sprint-17

import {
  GET_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_ELEMENT,
  GET_CONSTRUCTOR_BUN,
  RESET_CONSTRUCTOR
} from "../constants/burger-constructor";

export interface IGetConstructorIngredientAction {
  readonly type: typeof GET_CONSTRUCTOR_INGREDIENT;
  readonly ingredients: ReadonlyArray<TIngredient>;
}

export interface IDeleteConstructorElementAction {
  readonly type: typeof DELETE_CONSTRUCTOR_ELEMENT;
<<<<<<< HEAD
  readonly uuid: string;
=======
  readonly uuid: string | undefined;
>>>>>>> sprint-17
}

export interface IGetConstructorBunAction {
  readonly type: typeof GET_CONSTRUCTOR_BUN;
<<<<<<< HEAD
  readonly bun: TIngredient;
=======
  readonly bun: TIngredient | null;
>>>>>>> sprint-17
}

export interface IResetConstructorAction {
  readonly type: typeof RESET_CONSTRUCTOR;
}

export type TBurgerConstructorAction =
  | IGetConstructorIngredientAction
  | IDeleteConstructorElementAction
  | IGetConstructorBunAction
  | IResetConstructorAction;

<<<<<<< HEAD
export const addIngredientToConstructor = (newIngredient: TIngredient, bun: TIngredient, newItem: TIngredient, newIngredients: ReadonlyArray<TIngredient>) => {
  return function (dispatch: AppDispatch) {
=======
export const addIngredientToConstructor = (newIngredient: TIngredient, bun: TIngredient | null, newItem: TIngredient, newIngredients: ReadonlyArray<TIngredient>) => {
  return function (dispatch: TAppDispatch) {
>>>>>>> sprint-17
    if (newIngredient.type === 'bun' && bun) {
      dispatch(decreaseCounter(bun._id, 2))
      dispatch(increaseCounter(newItem._id, 2))
      dispatch(getConstructorBun(newIngredient));
    } else if (newIngredient.type === 'bun') {
      dispatch(increaseCounter(newItem._id, 2))
      dispatch(getConstructorBun(newIngredient));
    } else {
      dispatch(getConstructorIngredient(newIngredients));
      dispatch(increaseCounter(newItem._id, 1))
    }

  }
}

export const getConstructorIngredient = (newIngredients: ReadonlyArray<TIngredient>) => {
  return {
    type: GET_CONSTRUCTOR_INGREDIENT,
    ingredients: newIngredients
  }
}

const getConstructorBun = (newIngredient: TIngredient) => {
  return {
    type: GET_CONSTRUCTOR_BUN,
    bun: newIngredient
  }
}

const increaseCounter = (id: string, count: number) => {
  return {
    type: INCREASE_COUNTER,
    id,
    count
  }
}
const decreaseCounter = (id: string, count: number) => {
  return {
    type: DECREASE_COUNTER,
    id,
    count
  }
}