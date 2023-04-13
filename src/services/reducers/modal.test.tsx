import { TModalState, modalReducer, modalInitialState } from "./modal";
import {
  IS_REQUEST,
  IS_SUCCESS,
  IS_FAILED,
  SET_MODAL,
  RESET_MODAL
} from '../constants/modal';

describe('modal reducer', () => {
  it('modal request', () => {
    expect(modalReducer(modalInitialState, {
      type: IS_REQUEST
    })).toEqual({
      ...modalInitialState,
      isRequest: true
    })
  })

  it('modal success', () => {
    expect(modalReducer(modalInitialState, {
      type: IS_SUCCESS
    })).toEqual({
      ...modalInitialState,
      isRequest: false,
      isFailed: false
    })
  })

  it('modal failed', () => {
    expect(modalReducer(modalInitialState, {
      type: IS_FAILED
    })).toEqual({
      ...modalInitialState,
      isRequest: false,
      isFailed: true
    })
  })

  it('set modal', () => {
    expect(modalReducer(modalInitialState, {
      type: SET_MODAL,
      currentModal: null
    })).toEqual({
      ...modalInitialState,
      currentModal: null
    })
  })

  it('reset modal', () => {
    expect(modalReducer(modalInitialState, {
      type: RESET_MODAL
    })).toEqual({
      ...modalInitialState,
      currentModal: null
    })
  })
})