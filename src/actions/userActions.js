import axios from "axios";
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  GET_USER_CART,
  SET_LOADING,
  LOGOUT
} from "./types";

export const getUserCart = () => async dispatch => {
  // console.log("ger User get called.");
  try {
    if (localStorage.token) {
      const token = localStorage.token;
      if (token) {
        axios.defaults.headers.common["x-auth-token"] = token;
      } else {
        delete axios.defaults.headers.common["x-auth-token"];
      }
    }
    try {
      const res = await axios.get(
        "https://quiet-dawn-64698.herokuapp.com/api/users/cart"
      );
      dispatch({ type: GET_USER_CART, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  } catch (err) {
    alert("get User cart got error", err);
  }
};

const setLoading = () => async dispatch => {
  dispatch({ type: SET_LOADING });
};

export const logout = () => async dispatch => {
  setLoading();
  dispatch({ type: LOGOUT });
};

export const loginUser = formData => async dispatch => {
  setLoading();
  //if no token stored, get token first
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post(
      "https://quiet-dawn-64698.herokuapp.com/api/auth",
      formData,
      config
    );
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: res.data
    });

    //send request to auth
    if (localStorage.token) {
      const token = localStorage.token;
      if (token) {
        axios.defaults.headers.common["x-auth-token"] = token;
      } else {
        delete axios.defaults.headers.common["x-auth-token"];
      }
    }
    try {
      const res = await axios.get(
        "https://quiet-dawn-64698.herokuapp.com/api/auth"
      );
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  } catch (err) {
    alert("this alert since login error", err);
  }
};

export const loadUser = () => async dispatch => {
  setLoading();
  //load token to header
  // 1. get toekn from local storage
  // 2. set axios request header with 'x-auth-token' and token
  //console.log("geT here in load user.");
  if (localStorage.token) {
    const token = localStorage.token;
    if (token) {
      axios.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete axios.defaults.headers.common["x-auth-token"];
    }
  }
  //send request
  try {
    // console.log("Ok in loadUser functin.");
    const res = await axios.get(
      "https://quiet-dawn-64698.herokuapp.com/api/auth"
    );
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const registerUser = formData => async dispatch => {
  setLoading();
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    //console.log("Action register user work!");
    const res = await axios.post(
      "https://quiet-dawn-64698.herokuapp.com/api/users",
      formData,
      config
    );
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: res.data
    });

    //load token to header
    // 1. get toekn from local storage
    // 2. set axios request header with 'x-auth-token' and token
    //console.log("geT here in load user.");
    if (localStorage.token) {
      const token = localStorage.token;
      if (token) {
        axios.defaults.headers.common["x-auth-token"] = token;
      } else {
        delete axios.defaults.headers.common["x-auth-token"];
      }
    }
    //send request
    try {
      //  console.log("Ok in loadUser functin.");
      const res = await axios.get(
        "https://quiet-dawn-64698.herokuapp.com/api/auth"
      );
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  } catch (err) {
    //console.log(err.response.data.msg);
    alert(err.response.data.msg);
    dispatch({ type: REGISTER_USER_FAIL, payload: err.response.data.msg });
  }
};
