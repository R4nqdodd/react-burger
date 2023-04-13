import { IS_REQUEST, IS_FAILED, IS_SUCCESS, SET_MODAL, RESET_MODAL } from "../constants/modal";
import { TModalAction } from "../actions/modal";

export type TModalState = {
  isRequest: boolean;
  isFailed: boolean;

  currentModal: JSX.Element | null;
};

export const modalInitialState: TModalState = {
  isRequest: false,
  isFailed: false,

  currentModal: null,
}

export const modalReducer = (state = modalInitialState, action: TModalAction) => {
  switch(action.type) {
    case IS_REQUEST: {
      return {
        ...state,
        isRequest: true
      }
    };
    case IS_SUCCESS: {
      return {
        ...state,
        isRequest: false,
        isFailed: false
      }
    }
    case IS_FAILED: {
      return {
        ...state,
        isRequest: false,
        isFailed: true
      }
    }
    case SET_MODAL: {
      return {
        ...state,
        currentModal: action.currentModal
      }
    }
    case RESET_MODAL: {
      return {
        ...state,
        currentModal: null
      }
    }
    default: {
      return state;
    }
  }
}