import { TOrderState, newOrderReducer } from './order';
import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILED,
  ORDER_RESET
} from '../constants/order';

const orderInitialState: TOrderState = {
  name: 'weq',
  order: { number: 123 },

  orderRequest: false,
  orderFailed: false
}

describe('new order reducer', () => {
  it('order request', () => {
    expect(newOrderReducer(orderInitialState, {
      type: ORDER_REQUEST
    })).toEqual({
      ...orderInitialState,
      orderRequest: true,
      orderFailed: false
    })
  })

  it('order success', () => {
    expect(newOrderReducer(orderInitialState, {
      type: ORDER_SUCCESS,
      name: 'weq',
      order: { number: 123 }
    })).toEqual({
      ...orderInitialState,
      orderRequest: false,
      name: '',
      order: { number: 0 }
    })
  })

  it('order failed', () => {
    expect(newOrderReducer(orderInitialState, {
      type: ORDER_FAILED
    })).toEqual({
      ...orderInitialState,
      orderRequest: false,
      orderFailed: true
    })
  })

  it('order reset', () => {
    expect(newOrderReducer(orderInitialState, {
      type: ORDER_RESET
    })).toEqual({
      ...orderInitialState,
      orderRequest: false,
      orderFailed: false,
      name: '',
      order: { number: 0 }
    })
  })
})