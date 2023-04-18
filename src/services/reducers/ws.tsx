import {
<<<<<<< HEAD
  WS_CONNECTION_START,
=======
>>>>>>> sprint-17
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE
} from '../constants/ws';
import { TWSAction } from '../actions/ws';

<<<<<<< HEAD

type TinitialState = {
  wsConnected: boolean;
  data: {
    orders: [];
=======
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
>>>>>>> sprint-17
    total: number;
    totalToday: number;
  }
}

<<<<<<< HEAD
const initialState: TinitialState = {
=======
export const initialState: TOrdersState = {
>>>>>>> sprint-17
  wsConnected: false,
  data: {
    orders: [],
    total: 0,
    totalToday: 0
  }
};

<<<<<<< HEAD
export const wsReducer = (state = initialState, action: TWSAction) => {
=======
export const wsReducer = (state = initialState, action: TWSAction): TOrdersState  => {
>>>>>>> sprint-17
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
<<<<<<< HEAD
        data: action.payload
=======
        data: {
          ...action.payload
        }
>>>>>>> sprint-17
      };
      
    default:
      return state;
  }
};