import { DECREASE_COUNTER, INCREASE_COUNTER } from "./burger-ingredients";

export const GET_CONSTRUCTOR_INGREDIENT = 'GET_CONSTRUCTOR_ELEMENT';
export const DELETE_CONSTRUCTOR_ELEMENT = 'DELETE_CONSTRUCTOR_ELEMENT';
export const GET_CONSTRUCTOR_BUN = 'GET_CONSTRUCTOR_BUN';
export const RESET_CONSTRUCTOR = 'RESET_CONSTRUCTOR';

type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  count: number;
  uuid?: string;
};


export const addIngredientToConstructor = (newIngredient: TIngredient, bun: TIngredient, id: string, newIngredients: TIngredient[]): any => {
  return function (dispatch: any) {
    if (newIngredient.type === 'bun' && bun) {
      dispatch(decreaseCounter(bun._id, 2))
      dispatch(increaseCounter(id, 2))
      dispatch(getConstructorBun(newIngredient));
    } else if (newIngredient.type === 'bun') {
      dispatch(increaseCounter(id, 2))
      dispatch(getConstructorBun(newIngredient));
    } else {
      dispatch(getConstructorIngredient(newIngredients));
      dispatch(increaseCounter(id, 1))
    }

  }
}

export const getConstructorIngredient = (newIngredients: TIngredient[]) => {
  return function (dispatch: any) {
    dispatch({
      type: GET_CONSTRUCTOR_INGREDIENT,
      ingredients: newIngredients
    })
  }
}

const getConstructorBun = (newIngredient: TIngredient) => {
  return function (dispatch: any) {
    dispatch({
      type: GET_CONSTRUCTOR_BUN,
      bun: newIngredient
    })
  }
}

const increaseCounter = (id: string, count: number) => {
  return function (dispatch: any) {
    dispatch({
      type: INCREASE_COUNTER,
      id,
      count
    })
  }
}
const decreaseCounter = (id: string, count: number) => {
  return function (dispatch: any) {
    dispatch({
      type: DECREASE_COUNTER,
      id,
      count
    })
  }
}