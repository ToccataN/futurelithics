import * as Types from "./types";

export const UserAuth = (
  state = {
    isLoading: false,
    isAuthenticated: false,
    token: null,
    user: null,
    errMessage: null,
  },
  action
) => {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        errMessage: null,
        user: action.creds,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: action.response.token,
        user: action.response.user,
        errMessage: null,
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errMessage: action.response.status,
      };
    case Types.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        errMessage: null,
        user: action.creds,
      };
    case Types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: action.response.token,
        user: action.response.user,
        errMessage: null,
      };
    case Types.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errMessage: action.response.status,
      };
    case Types.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: true,
      };
    case Types.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};