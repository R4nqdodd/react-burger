import { Interface } from "readline";
import { request } from "../../utils/api";
import { TIngredient } from "../../utils/types";
<<<<<<< HEAD
import { AppDispatch } from "../types";
=======
import { TAppDispatch, TAppThunk } from "../types";
>>>>>>> sprint-17

import {
  GET_BURGER_INGREDIENTS_REQUEST,
  GET_BURGER_INGREDIENTS_SUCCESS,
  GET_BURGER_INGREDIENTS_FAILED,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER
} from '../constants/burger-ingredients';

export interface IGetBurgerIngredientsRequestAction {
  readonly type: typeof GET_BURGER_INGREDIENTS_REQUEST;
}
export interface IGetBurgerIngredientsSuccessAction {
  readonly type: typeof GET_BURGER_INGREDIENTS_SUCCESS;
  ingredients: ReadonlyArray<TIngredient>;
}

export interface IGetBurgerIngredientsFailedAction {
  readonly type: typeof GET_BURGER_INGREDIENTS_FAILED;
}

export interface IIncreaseCounterAction {
  readonly type: typeof INCREASE_COUNTER;
  id: string;
  count: number;
}

export interface IDecreaseCounterAction {
  readonly type: typeof DECREASE_COUNTER;
  id: string;
  count: number;
}

export interface IResetCounterAction {
  readonly type: typeof RESET_COUNTER;
}

export type TBurgerIngredientsAction =
  | IGetBurgerIngredientsRequestAction
  | IGetBurgerIngredientsSuccessAction
  | IGetBurgerIngredientsFailedAction
  | IIncreaseCounterAction
  | IDecreaseCounterAction
  | IResetCounterAction;

<<<<<<< HEAD
const getIngredients = () => request('/ingredients');

export function getBurgerIngredients() {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_BURGER_INGREDIENTS_REQUEST
    })
=======

const getIngredientsRequest = (): IGetBurgerIngredientsRequestAction => ({
  type: GET_BURGER_INGREDIENTS_REQUEST
})

const getIngredientsSuccess = (ingredients: ReadonlyArray<TIngredient>): IGetBurgerIngredientsSuccessAction => ({
  type: GET_BURGER_INGREDIENTS_SUCCESS,
  ingredients: ingredients
})

const getIngredientsFailed = (): IGetBurgerIngredientsFailedAction => ({
  type: GET_BURGER_INGREDIENTS_FAILED
})


const getIngredients = () => request('/ingredients');

export const getBurgerIngredients = (): TAppThunk =>  (dispatch) => {
    dispatch(getIngredientsRequest())
>>>>>>> sprint-17
    getIngredients()
      .then(data => {
        const ingredients = data.data.map((item: TIngredient) => {
          item.count = 0; return item;
        })
<<<<<<< HEAD
        dispatch({
          type: GET_BURGER_INGREDIENTS_SUCCESS,
          ingredients: ingredients
        })
      })
      .catch(err => {
        dispatch({
          type: GET_BURGER_INGREDIENTS_FAILED
        })
        console.log(`Ошибка: ${err.status}`);
      });
  }
}
=======
        dispatch(getIngredientsSuccess(ingredients))
      })
      .catch(err => {
        dispatch(getIngredientsFailed())
        console.log(`Ошибка: ${err.status}`);
      });
  }
>>>>>>> sprint-17
