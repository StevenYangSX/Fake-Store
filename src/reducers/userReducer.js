import {
  REGISTER_USER_SUCCESS,
  SET_LOADING,
  REGISTER_USER_FAIL,
  USER_LOADED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT,
  REMOVE_ITEM_FROM_CART_SERVER,
  ADD_ITEM_TO_CART_SERVER
} from "../actions/types";

const initialState = {
  user: null,
  isAuthenticated: null,
  token: localStorage.getItem("token"),
  error: null,
  loading: false
  //cart: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        user: null,
        isAuthenticated: null,
        token: localStorage.removeItem("token"),
        error: null,
        loading: false
      };
    case SET_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case USER_LOADED:
      //   console.log("Ok in USER_LOADED reducer.");
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };

    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      // console.log("Reducer register user work.");
      return {
        ...state,
        token: action.payload,
        isAuthenticated: false
        //loading: false
      };
    case REGISTER_USER_FAIL:
    case LOGIN_USER_FAIL:
      //  console.log("Reducer register work. But failed.");
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };

    case REMOVE_ITEM_FROM_CART_SERVER:
    case ADD_ITEM_TO_CART_SERVER:
      return {
        ...state,
        user: { cart: action.payload }
      };
    default:
      return state;
  }
};
