import {
  GET_CONSTRUCTOR_ELEMENT,
  DELETE_CONSTRUCTOR_ELEMENT,
  GET_CONSTRUCTOR_BUN
} from '../actions/burger-constructor';

const burgerConstractorInitialState = {
  bun: {
    price: 0
  },
  ingredients: []
}

export const ingredientsConstructorReducer = (state = burgerConstractorInitialState, action) => {
  switch(action.type) {
    case GET_CONSTRUCTOR_BUN: {
      return {
        ...state,
        bun: action.bun
      }
    }
    case GET_CONSTRUCTOR_ELEMENT: {
      return {
        ...state,
        ingredients: action.ingredients
      };
    }
    case DELETE_CONSTRUCTOR_ELEMENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(item => item.uuid !== action.uuid)
      }
    }
    default: {
      return state;
    }
  }
}