import {
  SET_CURRENT_INGREDIENT,
  DELETE_CURRENT_INGREDIENT
} from '../constants/current-ingredient';

export interface ISetCurrentIngredientAction {
  readonly type: typeof SET_CURRENT_INGREDIENT;
  readonly current: JSX.Element | null
}

export interface IDeleteCurrentIngredientAction {
  readonly type: typeof DELETE_CURRENT_INGREDIENT;
}

export type TCurrentIngredientAction =
  | ISetCurrentIngredientAction
  | IDeleteCurrentIngredientAction;