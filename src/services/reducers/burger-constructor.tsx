import {
  GET_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_ELEMENT,
  GET_CONSTRUCTOR_BUN,
  RESET_CONSTRUCTOR
} from '../constants/burger-constructor';
import { TIngredient } from '../../utils/types';
import { TBurgerConstructorAction } from '../actions/burger-constructor';

type TBurgerConstructorState = {
  bun: TIngredient | null;
  ingredients: ReadonlyArray<TIngredient>;
};

const burgerConstractorInitialState: TBurgerConstructorState = {
  bun: null,
  ingredients: []
}

export const ingredientsConstructorReducer = (state = burgerConstractorInitialState, action: TBurgerConstructorAction) => {
  switch(action.type) {
    case GET_CONSTRUCTOR_BUN: {
      return {
        ...state,
        bun: action.bun
      }
    }
    case GET_CONSTRUCTOR_INGREDIENT: {
      return {
        ...state,
        ingredients: action.ingredients
      };
    }
    case DELETE_CONSTRUCTOR_ELEMENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter((item: TIngredient) => item.uuid !== action.uuid)
      }
    }
    case RESET_CONSTRUCTOR: {
      return {
        ...state,
        bun: null,
        ingredients: []
      }
    }
    default: {
      return state;
    }
  }
}