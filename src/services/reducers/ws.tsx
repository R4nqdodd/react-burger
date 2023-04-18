import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE
} from '../constants/ws';
import { TWSAction } from '../actions/ws';

type TWSOrder = {
  _id: string;
  ingredients: ReadonlyArray<string>;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
}


export type TOrdersState = {
  wsConnected: boolean;
  data: {
    orders: ReadonlyArray<TWSOrder>;
    total: number;
    totalToday: number;
  }
}

export const initialState: TOrdersState = {
  wsConnected: false,
  data: {
    orders: [],
    total: 0,
    totalToday: 0
  }
};

export const wsReducer = (state = initialState, action: TWSAction): TOrdersState  => {
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
        wsConnected: false,
        data: {
          orders: [],
          total: 0,
          totalToday: 0
        }
      };

    case WS_GET_MESSAGE:
      return {
        ...state,
        data: {
          ...action.payload
        }
      };
      
    default:
      return state;
  }
};