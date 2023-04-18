import { ingredientsConstructorReducer, TBurgerConstructorState, burgerConstractorInitialState } from "./burger-constructor";
import { GET_CONSTRUCTOR_BUN, GET_CONSTRUCTOR_INGREDIENT, DELETE_CONSTRUCTOR_ELEMENT, RESET_CONSTRUCTOR } from "../constants/burger-constructor";
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

describe('constructor reducer', () => {
  it('get constructor bun', () => {
    expect(ingredientsConstructorReducer(burgerConstractorInitialState, {
      type: GET_CONSTRUCTOR_BUN,
      bun: null
    })).toEqual({
      ...burgerConstractorInitialState,
      bun: null
    })
  })

  it('get constructor ingredient', () => {
    expect(ingredientsConstructorReducer(burgerConstractorInitialState, {
      type: GET_CONSTRUCTOR_INGREDIENT,
      ingredients: []
    })).toEqual({
      ...burgerConstractorInitialState,
      ingredients: []
    })
  })

  it('delete constructor element', () => {
    expect(ingredientsConstructorReducer(burgerConstractorInitialState, {
      type: DELETE_CONSTRUCTOR_ELEMENT,
      uuid: 'eaiourngoiaeriognse923u81hrhdjf834hf8838fh28h23f'
    })).toEqual({
      ...burgerConstractorInitialState,
      ingredients: []
    })
  })

  it('reset constructor', () => {
    expect(ingredientsConstructorReducer(burgerConstractorInitialState, {
      type: RESET_CONSTRUCTOR
    })).toEqual({
      ...burgerConstractorInitialState,
      bun: null,
      ingredients: []
    })
  })
})