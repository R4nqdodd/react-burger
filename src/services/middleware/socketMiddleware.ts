import type { Middleware, MiddlewareAPI } from 'redux';

import type { TAppDispatch, TRootState } from '../types';

import { TWSAction, TWSActionNames } from '../actions/ws';

export const socketMiddleware = (wsActions: TWSActionNames): Middleware => {
  return ((store: MiddlewareAPI<TAppDispatch, TRootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TWSAction) => {
      const { dispatch } = store;

      if (action.type === wsActions.WS_CONNECTION_START) {
        // объект класса WebSocket
        socket = new WebSocket(action.payload);
      }
      if (socket) {

        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({ type: wsActions.WS_CONNECTION_SUCCESS, payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: wsActions.WS_CONNECTION_ERROR, payload: event });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
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
          const message = action.payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};