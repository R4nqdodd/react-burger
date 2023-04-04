import { DECREASE_COUNTER, INCREASE_COUNTER } from "./burger-ingredients";

export const GET_CONSTRUCTOR_INGREDIENT = 'GET_CONSTRUCTOR_ELEMENT';
export const DELETE_CONSTRUCTOR_ELEMENT = 'DELETE_CONSTRUCTOR_ELEMENT';
export const GET_CONSTRUCTOR_BUN = 'GET_CONSTRUCTOR_BUN';
export const RESET_CONSTRUCTOR = 'RESET_CONSTRUCTOR';

export const addIngredientToConstructor = (newIngredient, bun, newItem, newIngredients) => {
  return function (dispatch) {
    if (newIngredient.type === 'bun' && bun) {
      dispatch(decreaseCounter(bun._id, 2))
      dispatch(increaseCounter(newItem, 2))
      dispatch(getConstructorBun(newIngredient));
    } else if (newIngredient.type === 'bun') {
      dispatch(increaseCounter(newItem, 2))
      dispatch(getConstructorBun(newIngredient));
    } else {
      dispatch(getConstructorIngredient(newIngredients));
      dispatch(increaseCounter(newItem, 1))
    }

  }
}

export const getConstructorIngredient = (newIngredients) => {
  return function (dispatch) {
    dispatch({
      type: GET_CONSTRUCTOR_INGREDIENT,
      ingredients: newIngredients
    })
  }
}

const getConstructorBun = (newIngredient) => {
  return function (dispatch) {
    dispatch({
      type: GET_CONSTRUCTOR_BUN,
      bun: newIngredient
    })
  }
}

const increaseCounter = (id, count) => {
  return function (dispatch) {
    dispatch({
      type: INCREASE_COUNTER,
      id,
      count
    })
  }
}
const decreaseCounter = (id, count) => {
  return function (dispatch) {
    dispatch({
      type: DECREASE_COUNTER,
      id,
      count
    })
  }
}