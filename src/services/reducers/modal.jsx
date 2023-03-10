import {
  SET_MODAL_TYPE,
  OPEN_MODAL,
  CLOSE_MODAL
} from "../actions/modal";

const modalInitialState = {
  modalType: '',
  isOpen: false
}

export const modalReducer = (state = modalInitialState, action) => {
  switch (action.type) {
    case SET_MODAL_TYPE: {
      return {
        ...state,
        modalType: action.modalType,
      }
    }
    case OPEN_MODAL: {
      return {
        ...state,
        isOpen: true
      }
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isOpen: false
      }
    }
    default: {
      return state
    }
  }
}