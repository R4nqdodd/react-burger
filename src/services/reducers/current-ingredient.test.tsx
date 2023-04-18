import { TCurrentIngredientState, currentIngredientReducer, currentIngredientInitialState } from "./current-ingredient";
import {
  SET_CURRENT_INGREDIENT,
  DELETE_CURRENT_INGREDIENT
} from '../constants/current-ingredient';

describe('current ingredient reducer', () => {
  it('set current ingredient', () => {
    expect(currentIngredientReducer(currentIngredientInitialState, {
      type: SET_CURRENT_INGREDIENT,
      current: null
    })).toEqual({
      ...currentIngredientInitialState,
      current: null
    })
  })

  it('delete current ingredient', () => {
    expect(currentIngredientReducer(currentIngredientInitialState, {
      type: DELETE_CURRENT_INGREDIENT
    })).toEqual({
      ...currentIngredientInitialState,
      current: null
    })
  })
})