import { TBurgerIngredientsState, burgerIngredientsReducer } from "./burger-ingredients";
import { 
  GET_BURGER_INGREDIENTS_REQUEST,
  GET_BURGER_INGREDIENTS_FAILED,
  GET_BURGER_INGREDIENTS_SUCCESS,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER
} from "../constants/burger-ingredients";
import { TIngredient } from "../../utils/types";

const ingredient: TIngredient = {
  _id: "60d3b41abdacab0026a733c6",
  name: "Краторная булка N-200i",
  type: "bun",
  count: 0,
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  __v: 0,
  uuid: 'eaiourngoiaeriognse923u81hrhdjf834hf8838fh28h23f'
}


const burgerIngredientsInitialState: TBurgerIngredientsState = {
  ingredients: [ingredient],
  ingredientsRequest: false,
  ingredientsFailed: false
}

describe('burger ingredients reducer', ()=> {
  it('get burger ingredients request', () => {
    expect(burgerIngredientsReducer(burgerIngredientsInitialState, {
      type: GET_BURGER_INGREDIENTS_REQUEST
    })).toEqual({
      ...burgerIngredientsInitialState,
      ingredientsRequest: true
    })
  })

  it('get burger ingredients success', () => {
    expect(burgerIngredientsReducer(burgerIngredientsInitialState, {
      type: GET_BURGER_INGREDIENTS_SUCCESS,
      ingredients: [ingredient]
    })).toEqual({
      ...burgerIngredientsInitialState,
      ingredientsRequest: false,
      ingredientsFailed: false,
      ingredients: []
    })
  })

  it('get burger ingredients failed', () => {
    expect(burgerIngredientsReducer(burgerIngredientsInitialState, {
      type: GET_BURGER_INGREDIENTS_FAILED
    })).toEqual({
      ...burgerIngredientsInitialState,
      ingredientsRequest: false,
      ingredientsFailed: true
    })
  })

  it('increase counter', () => {
    expect(burgerIngredientsReducer(burgerIngredientsInitialState, {
      type: INCREASE_COUNTER,
      id: '',
      count: 0
    })).toEqual({
      ...burgerIngredientsInitialState,
      ingredients: []
    })
  })

  it('decrease counter', () => {
    expect(burgerIngredientsReducer(burgerIngredientsInitialState, {
      type: DECREASE_COUNTER,
      id: '',
      count: 0
    })).toEqual({
      ...burgerIngredientsInitialState,
      ingredients: []
    })
  })

  it('reset counter', () => {
    expect(burgerIngredientsReducer(burgerIngredientsInitialState, {
      type: RESET_COUNTER
    })).toEqual({
      ...burgerIngredientsInitialState,
      ingredients: []
    })
  })
})