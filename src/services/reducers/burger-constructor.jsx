
import { v4 as uuidv4 } from 'uuid';
import {
  GET_CONSTRUCTOR_ELEMENT,
  DELETE_CONSTRUCTOR_ELEMENT
} from '../actions/burger-constructor';

const burgerConstractorInitialState = {
  ingredients: []
}

export const ingredientsConstructorReducer = (state = burgerConstractorInitialState, action) => {
  switch(action.type) {
    case GET_CONSTRUCTOR_ELEMENT: {
      return {
        ...state,
        ingredients: action.ingredients
      };
    }
    case DELETE_CONSTRUCTOR_ELEMENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(item => item.uuid !== action.id)
      }
    }
    default: {
      return state;
    }
  }
}