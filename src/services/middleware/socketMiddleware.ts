import type { Middleware, MiddlewareAPI } from 'redux';

<<<<<<< HEAD
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
  WS_CONNECTION_CLOSE
} from '../constants/ws';

import type { AppDispatch, RootState } from '../types';

import { TWSAction } from '../actions/ws';

export const socketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TWSAction) => {
      const { dispatch, getState } = store;

      if (action.type === WS_CONNECTION_START) {
=======
import type { TAppDispatch, TRootState } from '../types';

import { TWSAction, TWSActionNames } from '../actions/ws';

export const socketMiddleware = (wsActions: TWSActionNames): Middleware => {
  return ((store: MiddlewareAPI<TAppDispatch, TRootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TWSAction) => {
      const { dispatch } = store;

      if (action.type === wsActions.WS_CONNECTION_START) {
>>>>>>> sprint-17
        // объект класса WebSocket
        socket = new WebSocket(action.payload);
      }
      if (socket) {

        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
<<<<<<< HEAD
          dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
=======
          dispatch({ type: wsActions.WS_CONNECTION_SUCCESS, payload: event });
>>>>>>> sprint-17
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
<<<<<<< HEAD
          dispatch({ type: WS_CONNECTION_ERROR, payload: event });
=======
          dispatch({ type: wsActions.WS_CONNECTION_ERROR, payload: event });
>>>>>>> sprint-17
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
<<<<<<< HEAD
          dispatch({ type: WS_GET_MESSAGE, payload: JSON.parse(event.data) });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
        };

        if (action.type === WS_CONNECTION_CLOSE) {
          socket.close(1000)
        }

        if (action.type === WS_SEND_MESSAGE) {
=======
          dispatch({ type: wsActions.WS_GET_MESSAGE, payload: JSON.parse(event.data) });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: wsActions.WS_CONNECTION_CLOSED, payload: event });
        };

        if (action.type === wsActions.WS_CONNECTION_CLOSE) {
          socket.close(1000)
        }

        if (action.type === wsActions.WS_SEND_MESSAGE) {
>>>>>>> sprint-17
          const message = action.payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};