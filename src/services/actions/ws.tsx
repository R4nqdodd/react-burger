import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
  WS_CONNECTION_CLOSE
} from '../constants/ws';

export interface IWSConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
}

export interface IWSConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IWSConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWSGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: any;
}

export interface IWSSendMessageAction {
  readonly type: typeof WS_SEND_MESSAGE;
  readonly payload: any;
}

export interface IWSConnectionCloseAction {
  readonly type: typeof WS_CONNECTION_CLOSE
}

export type TWSAction =
  | IWSConnectionStartAction
  | IWSConnectionSuccessAction
  | IWSConnectionErrorAction
  | IWSConnectionClosedAction
  | IWSGetMessageAction
  | IWSSendMessageAction
  | IWSConnectionCloseAction;

  export type TWSActionNames = {
    [key in TWSAction['type']] : key
}