import { IS_REQUEST, IS_FAILED, IS_SUCCESS, SET_MODAL, RESET_MODAL } from "../constants/modal";
import { TModalAction } from "../actions/modal";

<<<<<<< HEAD
type TModalState = {
=======
export type TModalState = {
>>>>>>> sprint-17
  isRequest: boolean;
  isFailed: boolean;

  currentModal: JSX.Element | null;
<<<<<<< HEAD
  resetActionType: string;
};

const modalInitialState: TModalState = {
=======
};

export const modalInitialState: TModalState = {
>>>>>>> sprint-17
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