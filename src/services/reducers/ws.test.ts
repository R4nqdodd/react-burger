import { TOrdersState, wsReducer, initialState } from './ws';
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE
} from '../constants/ws';

describe('websocket reducer', () => {
  it('websocket connection success', () => {
    expect(wsReducer(initialState, {
      type: WS_CONNECTION_SUCCESS
    })).toEqual({
      ...initialState,
      wsConnected: true
    })
  })

  it('websocket connection error', () => {
    expect(wsReducer(initialState, {
      type: WS_CONNECTION_ERROR
    })).toEqual({
      ...initialState,
      wsConnected: false
    })
  })

  it('websocket connection closed', () => {
    expect(wsReducer(initialState, {
      type: WS_CONNECTION_CLOSED
    })).toEqual({
      ...initialState,
      wsConnected: false,
      data: {
        orders: [],
        total: 0,
        totalToday: 0
      }
    })
  })

  it('websocket get message', () => {
    expect(wsReducer(initialState, {
      type: WS_GET_MESSAGE,
      payload: {}
    })).toEqual({
      ...initialState,
      data: {}
    })
  })
})