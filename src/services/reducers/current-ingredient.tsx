import {
  SET_CURRENT_INGREDIENT,
  DELETE_CURRENT_INGREDIENT
} from '../constants/current-ingredient';
import { TCurrentIngredientAction } from '../actions/current-ingredient';

<<<<<<< HEAD
type TCurrentIngredientState = {
  current: JSX.Element | null
};

const currentIngredientInitialState: TCurrentIngredientState = {
=======
export type TCurrentIngredientState = {
  current: JSX.Element | null
};

export const currentIngredientInitialState: TCurrentIngredientState = {
>>>>>>> sprint-17
  current: null
}

export const currentIngredientReducer = (state = currentIngredientInitialState, action: TCurrentIngredientAction) => {
  switch(action.type) {
    case SET_CURRENT_INGREDIENT: {
      return {
        ...state,
        current: action.current
      };
    }
    case DELETE_CURRENT_INGREDIENT: {
      return {
        ...state,
        current: null
      }
    }
    default: {
      return state;
    }
  }
}