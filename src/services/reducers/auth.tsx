import { IS_AUTH, UPDATE_TOKEN, USER_LOGIN, USER_LOGOUT } from "../constants/auth";
import { TAuthAction } from "../actions/auth";

type TUserDataState = {
  isAuth: boolean;
  user: {
    email: string;
    name: string;
    accessToken: string;
  } | null;
}

const userDataInitialState: TUserDataState = 
{
  isAuth: false,
  user: null
};

export const authReducer = (state = userDataInitialState, action: TAuthAction) => {
  switch(action.type) {
    case IS_AUTH: {
      return {
        ...state,
        isAuth: true
      }
    }
    case USER_LOGIN: {
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
          name: action.name,
          accessToken: action.accessToken
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
    }
    default: {
      return state;
    }
  }
}