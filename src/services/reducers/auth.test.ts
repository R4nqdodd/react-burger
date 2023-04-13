import { authReducer, TUserDataState, userDataInitialState } from "./auth";
import {
  IS_AUTH,
  USER_FORGOT_PASSWORD_FAILED,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILED,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_PROFILE_EDIT_FAILED,
  USER_PROFILE_EDIT_REQUEST,
  USER_PROFILE_EDIT_SUCCESS,
  USER_RESET_PASSWORD_FAILED,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS
} from "../constants/auth";

describe('auth reducer', () => {
  it('is auth', () => {
    expect(authReducer(userDataInitialState, {
      type: IS_AUTH,
    })).toEqual({
      ...userDataInitialState,
      isAuth: true
    })
  })

  it('user login request', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_LOGIN_REQUEST,
    })).toEqual({
      ...userDataInitialState,
      isLoginRequest: true,
      isLoginFailed: false
    })
  })

  it('user login success', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_LOGIN_SUCCESS,
      email: '',
      name: '',
      accessToken: ''
    })).toEqual({
      ...userDataInitialState,
      user: {
        email: '',
        name: '',
        accessToken: ''
      },
      isLogin: true,
      isLoginRequest: false
    })
  })

  it('user login failed', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_LOGIN_FAILED
    })).toEqual({
      ...userDataInitialState,
      isLoginRequest: false,
      isLoginFailed: true
    })
  })

  it('user logout request', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_LOGOUT_REQUEST
    })).toEqual({
      ...userDataInitialState,
      isLogoutRequest: true,
      isLogoutFailed: false
    })
  })

  it('user logout success', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_LOGOUT_SUCCESS,
    })).toEqual({
      ...userDataInitialState,
      user: {
        email: '',
        name: '',
        accessToken: ''
      },
      isAuth: true,
      isLogin: false,
      isLogoutRequest: false
    })
  })

  it('user logout failed', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_LOGOUT_FAILED
    })).toEqual({
      ...userDataInitialState,
      isLogoutRequest: false,
      isLogoutFailed: true
    })
  })

  it('user profile edit request', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_PROFILE_EDIT_REQUEST
    })).toEqual({
      ...userDataInitialState,
      isProfileEditRequest: true,
      isProfileEditFailed: false
    })
  })

  it('user profile edit success', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_PROFILE_EDIT_SUCCESS,
      email: '',
      name: ''
    })).toEqual({
      ...userDataInitialState,
      user: {
        ...userDataInitialState.user,
        email: '',
        name: ''
      },
      isProfileEditRequest: false,
    })
  })

  it('user profile edit failed', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_PROFILE_EDIT_FAILED
    })).toEqual({
      ...userDataInitialState,
      isProfileEditRequest: false,
      isProfileEditFailed: true
    })
  })

  it('user forgot password request', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_FORGOT_PASSWORD_REQUEST
    })).toEqual({
      ...userDataInitialState,
      isForgotPasswordRequest: true,
      isForgotPasswordFailed: false,
      isForgotPassword: false
    })
  })

  it('user forgot password success', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_FORGOT_PASSWORD_SUCCESS
    })).toEqual({
      ...userDataInitialState,
      isForgotPasswordRequest: false,
      isForgotPassword: true
    })
  })

  it('user forgot password failed', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_FORGOT_PASSWORD_FAILED
    })).toEqual({
      ...userDataInitialState,
      isForgotPasswordRequest: false,
      isForgotPasswordFailed: true
    })
  })

  it('user reset password request', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_RESET_PASSWORD_REQUEST
    })).toEqual({
      ...userDataInitialState,
      isResetPasswordRequest: true,
      isResetPasswordFailed: false,
      isResetPassword: false
    })
  })

  it('user reset password success', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_RESET_PASSWORD_SUCCESS
    })).toEqual({
      ...userDataInitialState,
      isResetPasswordRequest: false,
      isResetPassword: true
    })
  })

  it('user reset password failed', () => {
    expect(authReducer(userDataInitialState, {
      type: USER_RESET_PASSWORD_FAILED
    })).toEqual({
      ...userDataInitialState,
      isResetPasswordRequest: false,
      isResetPasswordFailed: true
    })
  })
})