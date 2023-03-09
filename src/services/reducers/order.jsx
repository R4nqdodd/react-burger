import { GET_ORDER_NUMBER } from '../actions/order';

const orderInitialState = {
  orderNumber: ''
}

export const newOrderReducer = (state = orderInitialState, action) => {
  switch(action.type) {
    case GET_ORDER_NUMBER: {
      return {
        ...state,
        orderNumber: '111111'
      }
    }
    default: {
      return state;
    }
  }
}