import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE
} from '../constants/ws';
import { TWSAction } from '../actions/ws';


type TinitialState = {
  wsConnected: boolean;
  data: {
    orders: [];
    success: boolean;
    total: number;
    totalToday: number;
  }
}

const initialState: TinitialState = {
  wsConnected: false,
  data: {
    orders: [],
    success: false,
    total: 0,
    totalToday: 0
  }
};

export const wsReducer = (state = initialState, action: TWSAction) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false
      };

    case WS_GET_MESSAGE:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};