import { DECREASE_COUNTER, INCREASE_COUNTER } from "../constants/burger-ingredients";
import { TIngredient } from "../../utils/types";
import { AppDispatch } from "../types";

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
  readonly uuid: string;
}

export interface IGetConstructorBunAction {
  readonly type: typeof GET_CONSTRUCTOR_BUN;
  readonly bun: TIngredient;
}

export interface IResetConstructorAction {
  readonly type: typeof RESET_CONSTRUCTOR;
}

export type TBurgerConstructorAction =
  | IGetConstructorIngredientAction
  | IDeleteConstructorElementAction
  | IGetConstructorBunAction
  | IResetConstructorAction;

export const addIngredientToConstructor = (newIngredient: TIngredient, bun: TIngredient, newItem: TIngredient, newIngredients: ReadonlyArray<TIngredient>) => {
  return function (dispatch: AppDispatch) {
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