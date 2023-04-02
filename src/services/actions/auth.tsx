import { request, getProfileInfoRequest, updateTokenRequest } from "../../utils/api";
import { setCookie, deleteCookie, getCookie } from "../../utils/utils";

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const IS_AUTH = 'IS_AUTH'

export const getUser = (token: string | undefined) => {
  return function (dispatch: any) {
    updateTokenRequest(token)
      .then(data => {
        deleteCookie('token');
        setCookie('token', data.refreshToken);
        getProfileInfoRequest(data.accessToken)
          .then(user => {
            dispatch({
              type: GET_USER_SUCCESS,
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