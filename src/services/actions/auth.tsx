import { request, getProfileInfoRequest, updateTokenRequest } from "../../utils/api";
import { setCookie, deleteCookie, getCookie } from "../../utils/utils";
import {
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
    updateTokenRequest(token)
      .then(data => {
        deleteCookie('token');
        setCookie('token', data.refreshToken);
        getProfileInfoRequest(data.accessToken)
          .then(user => {
            dispatch({
              type: USER_LOGIN,
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