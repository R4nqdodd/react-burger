import {
  GET_BURGER_INGREDIENTS_FAILED,
  GET_BURGER_INGREDIENTS_SUCCESS,
  GET_BURGER_INGREDIENTS_REQUEST,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER
} from '../constants/burger-ingredients';
import { TIngredient } from '../../utils/types';
import { TBurgerIngredientsAction } from '../actions/burger-ingredients';

type TBurgerIngredientsState = {
  ingredients: ReadonlyArray<TIngredient>;
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
}

const burgerIngredientsInitialState: TBurgerIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false
}

export const burgerIngredientsReducer = (state = burgerIngredientsInitialState, action: TBurgerIngredientsAction) => {
  switch (action.type) {
    case GET_BURGER_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true
      };
    }
    case GET_BURGER_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: action.ingredients
      };
    }
    case GET_BURGER_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true
      };
    }
    case INCREASE_COUNTER: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(item => {
          if (item._id === action.id) {
            item.count += action.count;
          }
          return item
        })
      }
    }
    case DECREASE_COUNTER: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(item => {
          if (item._id === action.id) {
            item.count -= action.count;
          }
          return item
        })
      }
    }
    case RESET_COUNTER: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(item => {
          item.count = 0;

          return item
        })
      }
    }
    default: {
      return state;
    }
  }
}