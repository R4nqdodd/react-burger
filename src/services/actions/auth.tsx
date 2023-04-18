import { request, getProfileInfoRequest, updateTokenRequest, loginRequest, registrationRequest, logoutRequest, editProfileInfoRequest, forgotPasswordRequest, resetPasswordRequest } from "../../utils/api";
import { TForm } from "../../utils/types";
import { setCookie, deleteCookie, getCookie } from "../../utils/utils";
import {
<<<<<<< HEAD
  USER_LOGIN,
  USER_LOGOUT,
  UPDATE_TOKEN,
  IS_AUTH
} from "../constants/auth";
import { TUser } from "../../utils/types";
import { AppDispatch } from "../types";

export interface IUserLoginAction {
  readonly type: typeof USER_LOGIN;
  readonly email: string;
  readonly name: string;
  readonly accessToken: string;
}

export interface IUserLogoutAction {
  readonly type: typeof USER_LOGOUT;
}

export interface ITokenUpdateAction {
  readonly type: typeof UPDATE_TOKEN;
  readonly accessToken: string;
}

export interface IIsAuthAction {
  readonly type: typeof IS_AUTH;
}

export type TAuthAction =
  | IUserLoginAction
  | IUserLogoutAction
  | ITokenUpdateAction
  | IIsAuthAction;

export const getUser = (token: string | undefined) => {
  return function (dispatch: AppDispatch) {
=======
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILED,
  USER_LOGOUT_REQUEST,
  USER_PROFILE_EDIT_FAILED,
  USER_PROFILE_EDIT_REQUEST,
  USER_PROFILE_EDIT_SUCCESS,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAILED,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAILED,
  IS_AUTH,
} from "../constants/auth";
import { TAppDispatch, TAppThunk } from "../types";

export interface IUserLoginRequestAction {
  readonly type: typeof USER_LOGIN_REQUEST;
}

export interface IUserLoginSuccessAction {
  readonly type: typeof USER_LOGIN_SUCCESS;
  readonly email: string;
  readonly name: string;
  readonly accessToken: string;
}

export interface IUserLoginFailedAction {
  readonly type: typeof USER_LOGIN_FAILED;
}

export interface IUserLogoutRequestAction {
  readonly type: typeof USER_LOGOUT_REQUEST;
}

export interface IUserLogoutSuccessAction {
  readonly type: typeof USER_LOGOUT_SUCCESS;
}

export interface IUserLogoutFailedAction {
  readonly type: typeof USER_LOGOUT_FAILED;
}

export interface IIsAuthAction {
  readonly type: typeof IS_AUTH;
}

export interface IUserProfileEditRequestAction {
  readonly type: typeof USER_PROFILE_EDIT_REQUEST;
}

export interface IUserProfileEditSuccessAction {
  readonly type: typeof USER_PROFILE_EDIT_SUCCESS;
  readonly email: string,
  readonly name: string
}

export interface IUserProfileEditFailedAction {
  readonly type: typeof USER_PROFILE_EDIT_FAILED;
}

export interface IUserForgotPasswordRequestAction {
  readonly type: typeof USER_FORGOT_PASSWORD_REQUEST;
}

export interface IUserForgotPasswordSuccessAction {
  readonly type: typeof USER_FORGOT_PASSWORD_SUCCESS;
}

export interface IUserForgotPasswordFailedAction {
  readonly type: typeof USER_FORGOT_PASSWORD_FAILED;
}

export interface IUserResetPasswordRequestAction {
  readonly type: typeof USER_RESET_PASSWORD_REQUEST;
}

export interface IUserResetPasswordSuccessAction {
  readonly type: typeof USER_RESET_PASSWORD_SUCCESS;
}

export interface IUserResetPasswordFailedAction {
  readonly type: typeof USER_RESET_PASSWORD_FAILED;
}

export type TAuthAction =
  | IUserLoginRequestAction
  | IUserLoginSuccessAction
  | IUserLoginFailedAction
  | IUserLogoutSuccessAction
  | IUserLogoutRequestAction
  | IUserLogoutFailedAction
  | IUserProfileEditRequestAction
  | IUserProfileEditSuccessAction
  | IUserProfileEditFailedAction
  | IIsAuthAction
  | IUserForgotPasswordRequestAction
  | IUserForgotPasswordSuccessAction
  | IUserForgotPasswordFailedAction
  | IUserResetPasswordRequestAction
  | IUserResetPasswordSuccessAction
  | IUserResetPasswordFailedAction;

export const userLoginRequest = () => ({
  type: USER_LOGIN_REQUEST
})

export const userLoginSuccess = (email: string, name: string, accessToken: string) => ({
  type: USER_LOGIN_SUCCESS,
  email: email,
  name: name,
  accessToken: accessToken
})

export const userLoginFailed = () => ({
  type: USER_LOGIN_FAILED
})

export const userLogoutRequest = () => ({
  type: USER_LOGOUT_REQUEST
})

export const userLogoutSuccess = () => ({
  type: USER_LOGOUT_SUCCESS
})

export const userLogoutFailed = () => ({
  type: USER_LOGOUT_FAILED
})

export const userProfileEditRequest = () => ({
  type: USER_PROFILE_EDIT_REQUEST
})

export const userProfileEditSuccess = (email: string, name: string) => ({
  type: USER_PROFILE_EDIT_SUCCESS,
  email: email,
  name: name
})

export const userProfileEditFailed = () => ({
  type: USER_PROFILE_EDIT_FAILED
})

export const userForgotPasswordRequest = () => ({
  type: USER_FORGOT_PASSWORD_REQUEST
})

export const userForgotPasswordSuccess = () => ({
  type: USER_FORGOT_PASSWORD_SUCCESS
})

export const userForgotPasswordFailed = () => ({
  type: USER_FORGOT_PASSWORD_FAILED
})

export const userResetPasswordRequest = () => ({
  type: USER_RESET_PASSWORD_REQUEST
})

export const userResetPasswordSuccess = () => ({
  type: USER_RESET_PASSWORD_SUCCESS
})

export const userResetPasswordFailed = () => ({
  type: USER_RESET_PASSWORD_FAILED
})

export const getLogin = (form: TForm): TAppThunk => (dispatch) => {
  dispatch(userLoginRequest())
  loginRequest(form)
    .then(data => {
      const { email, name } = data.user;
      const accessToken = data.accessToken;
      dispatch(userLoginSuccess(email, name, accessToken));
      setCookie('token', data.refreshToken);
    })
    .catch(err => {
      dispatch(userLoginFailed());
      console.log(`Ошибка: ${err}`)
    })

}

export const getRegister = (form: TForm): TAppThunk => (dispatch) => {
  dispatch(userLoginRequest());
  registrationRequest(form)
    .then(data => {
      const { email, name } = data.user;
      const accessToken = data.accessToken;
      dispatch(userLoginSuccess(email, name, accessToken));
      setCookie('token', data.refreshToken);
    })
    .catch(err => {
      dispatch(userLoginFailed());
      console.log(`Ошибка: ${err}`);
    });
}

export const getLogout = (token: string | undefined): TAppThunk => (dispatch) => {
  dispatch(userLogoutRequest());
  logoutRequest(token)
    .then(() => {
      deleteCookie('token');
      dispatch(userLogoutSuccess());
    })
    .catch((err) => {
      dispatch(userLogoutFailed())
      console.log(`Ошибка: ${err}`);
    });

}

export const getEditProfile = (token: string, form: TForm): TAppThunk => (dispatch) => {
  dispatch(userProfileEditRequest());
  editProfileInfoRequest(token, form)
    .then(data => {
      const { email, name } = data.user;
      dispatch(userProfileEditSuccess(email, name));
    })
    .catch(err => {
      dispatch(userProfileEditFailed());
      console.log(`Ошибка: ${err}`);
    });
}

export const getForgotPassword = (form: TForm): TAppThunk => (dispatch) => {
  dispatch(userForgotPasswordRequest());
  forgotPasswordRequest(form)
    .then(() => {
      dispatch(userForgotPasswordSuccess());
    })
    .catch((err) => {
      dispatch(userForgotPasswordFailed());
      console.log(`Ошибка: ${err}`);
    })
}

export const getResetPassword = (form: TForm): TAppThunk => (dispatch) => {
  dispatch(userResetPasswordRequest());
  resetPasswordRequest(form)
    .then(() => {
      dispatch(userResetPasswordSuccess());
    })
    .catch((err) => {
      dispatch(userResetPasswordFailed());
      console.log(`Ошибка: ${err}`);
    })
}

export const getUser = (token: string | undefined): TAppThunk => {
  return function (dispatch) {
>>>>>>> sprint-17
    updateTokenRequest(token)
      .then(data => {
        deleteCookie('token');
        setCookie('token', data.refreshToken);
        getProfileInfoRequest(data.accessToken)
          .then(user => {
            dispatch({
<<<<<<< HEAD
              type: USER_LOGIN,
=======
              type: USER_LOGIN_SUCCESS,
>>>>>>> sprint-17
              email: user.user.email,
              name: user.user.name,
              accessToken: data.accessToken
            })
          })
          .finally(() => {
            dispatch({
              type: IS_AUTH
            })
          })
      })
      .catch(() => {
        dispatch({
          type: IS_AUTH
        })
      })
  }
}