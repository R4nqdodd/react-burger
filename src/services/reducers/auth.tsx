<<<<<<< HEAD
import { IS_AUTH, UPDATE_TOKEN, USER_LOGIN, USER_LOGOUT } from "../constants/auth";
import { TAuthAction } from "../actions/auth";

type TUserDataState = {
=======
import {
  IS_AUTH,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_FAILED,
  USER_PROFILE_EDIT_REQUEST,
  USER_PROFILE_EDIT_SUCCESS,
  USER_PROFILE_EDIT_FAILED,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAILED,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAILED
} from "../constants/auth";
import { TAuthAction } from "../actions/auth";

export type TUserDataState = {
>>>>>>> sprint-17
  isAuth: boolean;
  user: {
    email: string;
    name: string;
    accessToken: string;
<<<<<<< HEAD
  } | null;
}

const userDataInitialState: TUserDataState = 
{
  isAuth: false,
  user: null
};

export const authReducer = (state = userDataInitialState, action: TAuthAction) => {
  switch(action.type) {
=======
  };
  isLogin: boolean;
  isLoginRequest: boolean;
  isLoginFailed: boolean;

  isLogoutRequest: boolean;
  isLogoutFailed: boolean;

  isProfileEditRequest: boolean;
  isProfileEditFailed: boolean;

  isForgotPasswordRequest: boolean;
  isForgotPasswordFailed: boolean;
  isForgotPassword: boolean;

  isResetPasswordRequest: boolean;
  isResetPasswordFailed: boolean;
  isResetPassword: boolean;
}

export const userDataInitialState: TUserDataState =
{
  isAuth: false,
  user: {
    email: '',
    name: '',
    accessToken: ''
  },
  isLogin: false,
  isLoginRequest: false,
  isLoginFailed: false,

  isLogoutRequest: false,
  isLogoutFailed: false,

  isProfileEditRequest: false,
  isProfileEditFailed: false,

  isForgotPasswordRequest: false,
  isForgotPasswordFailed: false,
  isForgotPassword: false,

  isResetPasswordRequest: false,
  isResetPasswordFailed: false,
  isResetPassword: false
};

export const authReducer = (state = userDataInitialState, action: TAuthAction) => {
  switch (action.type) {
>>>>>>> sprint-17
    case IS_AUTH: {
      return {
        ...state,
        isAuth: true
      }
    }
<<<<<<< HEAD
    case USER_LOGIN: {
=======
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        isLoginRequest: true,
        isLoginFailed: false
      }
    }
    case USER_LOGIN_SUCCESS: {
>>>>>>> sprint-17
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
          name: action.name,
          accessToken: action.accessToken
<<<<<<< HEAD
        }
      };
    }
    case UPDATE_TOKEN: {
      return {
        ...state,
        accessToken: action.accessToken
      };
    }
    case USER_LOGOUT: {
      return {
        ...userDataInitialState,
        isAuth: true
      };
=======
        },
        isLogin: true,
        isLoginRequest: false
      };
    }
    case USER_LOGIN_FAILED: {
      return {
        ...state,
        isLoginRequest: false,
        isLoginFailed: true
      }
    }
    case USER_LOGOUT_REQUEST: {
      return {
        ...state,
        isLogoutRequest: true,
        isLogoutFailed: false
      }
    }
    case USER_LOGOUT_SUCCESS: {
      return {
        ...state,
        user: {
          email: '',
          name: '',
          accessToken: ''
        },
        isAuth: true,
        isLogin: false,
        isLogoutRequest: false
      };
    }
    case USER_LOGOUT_FAILED: {
      return {
        ...state,
        isLogoutRequest: false,
        isLogoutFailed: true
      }
    }
    case USER_PROFILE_EDIT_REQUEST: {
      return {
        ...state,
        isProfileEditRequest: true,
        isProfileEditFailed: false
      }
    }
    case USER_PROFILE_EDIT_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
          name: action.name
        },
        isProfileEditRequest: false,
      }
    }
    case USER_PROFILE_EDIT_FAILED: {
      return {
        ...state,
        isProfileEditRequest: false,
        isProfileEditFailed: true
      }
    }
    case USER_FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        isForgotPasswordRequest: true,
        isForgotPasswordFailed: false,
        isForgotPassword: false
      }
    }
    case USER_FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isForgotPasswordRequest: false,
        isForgotPassword: true
      }
    }
    case USER_FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        isForgotPasswordRequest: false,
        isForgotPasswordFailed: true
      }
    }
    case USER_RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        isResetPasswordRequest: true,
        isResetPasswordFailed: false,
        isResetPassword: false
      }
    }
    case USER_RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isResetPasswordRequest: false,
        isResetPassword: true
      }
    }
    case USER_RESET_PASSWORD_FAILED: {
      return {
        ...state,
        isResetPasswordRequest: false,
        isResetPasswordFailed: true
      }
>>>>>>> sprint-17
    }
    default: {
      return state;
    }
  }
}