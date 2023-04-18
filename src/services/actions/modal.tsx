import {
  IS_REQUEST,
  IS_SUCCESS,
  IS_FAILED,
  SET_MODAL,
  RESET_MODAL
} from '../constants/modal';

export interface IIsRequestAction {
  readonly type: typeof IS_REQUEST;
}
export interface IIsSuccessAction {
  readonly type: typeof IS_SUCCESS;
}
export interface IIsFailedAction {
  readonly type: typeof IS_FAILED;
}
export interface ISetModalAction {
  readonly type: typeof SET_MODAL;
  readonly currentModal: JSX.Element | null;
}
export interface IResetModalAction {
  readonly type: typeof RESET_MODAL;
}

export type TModalAction =
  | IIsRequestAction
  | IIsSuccessAction
  | IIsFailedAction
  | ISetModalAction
  | IResetModalAction;
