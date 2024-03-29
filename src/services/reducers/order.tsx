import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILED,
  ORDER_RESET
} from '../constants/order';
import { TOrderAction } from '../actions/order';

export type TOrderState = {
  name: string;
  order: {
    number: number;
  };
  orderRequest: boolean;
  orderFailed: boolean;
};

export const orderInitialState: TOrderState = {
  name: '',
  order: { number: 0 },

  orderRequest: false,
  orderFailed: false
}

export const newOrderReducer = (state = orderInitialState, action: TOrderAction) => {
  switch (action.type) {
    case ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false
      }
    }
    case ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        name: action.name,
        order: { number: action.order.number }
      }
    }
    case ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true
      }
    }
    case ORDER_RESET: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        name: '',
        order: { number: 0 }
      }
    }
    default: {
      return state;
    }
  }
}