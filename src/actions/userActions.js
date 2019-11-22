import axios from "axios";
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  GET_USER_CART
} from "./types";

export const loginUser = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    console.log("Action login user work!");
    const res = await axios.post(
      "https://quiet-dawn-64698.herokuapp.com/api/auth",
      formData,
      config
    );
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: res.data
    });

    //load user

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
      console.log("Ok in loadUser functin.");
      const res = await axios.get(
        "https://quiet-dawn-64698.herokuapp.com/api/auth"
      );
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  } catch (err) {
    alert(err);
  }
};

export const loadUser = () => async dispatch => {
  //load token to header
  // 1. get toekn from local storage
  // 2. set axios request header with 'x-auth-token' and token
  console.log("geT here in load user.");
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
    console.log("Ok in loadUser functin.");
    const res = await axios.get(
      "https://quiet-dawn-64698.herokuapp.com/api/auth"
    );
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const registerUser = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    console.log("Action register user work!");
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
    console.log("geT here in load user.");
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
      console.log("Ok in loadUser functin.");
      const res = await axios.get(
        "https://quiet-dawn-64698.herokuapp.com/api/auth"
      );
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  } catch (err) {
    //console.log(err.response.data.msg);
    //alert(err.response.data.msg);
    dispatch({ type: REGISTER_USER_FAIL, payload: err.response.data.msg });
  }
};

export const getUserCart = token => async dispatch => {
  try {
    if (localStorage.token) {
      const token = localStorage.token;
      if (token) {
        axios.defaults.headers.common["x-auth-token"] = token;
      } else {
        delete axios.defaults.headers.common["x-auth-token"];
      }

      const res = await axios.get(
        "https://quiet-dawn-64698.herokuapp.com/api/users/cart"
      );
      dispatch({ type: GET_USER_CART, payload: res.data });
    }
  } catch (err) {
    alert(err);
  }
};
