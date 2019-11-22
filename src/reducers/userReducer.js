import {
  REGISTER_USER_SUCCESS,
  LOGIN_USER,
  REGISTER_USER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  GET_USER_CART,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from "../actions/types";

const initialState = {
  user: null,
  isAuthenticated: null,
  token: localStorage.getItem("token"),
  error: null,
  loading: true
  //cart: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      console.log("Ok in USER_LOADED reducer.");
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      console.log("Reducer register user work.");
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_USER_FAIL:
    case LOGIN_USER_FAIL:
      console.log("Reducer register work. But failed.");
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    default:
      return state;
  }
};
