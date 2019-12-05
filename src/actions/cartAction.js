import axios from "axios";
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
  SET_LOADING,
  REMOVE_ITEM_FROM_CART_SERVER,
  REMOVE_ONE_ITEM_FROM_CART
} from "./types";

export const removeItemFromCart = id => async dispatch => {
  const body = {
    id: id,
    allOrSingle: "all"
  };

  try {
    // console.log("chekc header:", axios.defaults.headers);
    const res = await axios.delete(
      "https://quiet-dawn-64698.herokuapp.com/api/users/cart",
      {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token")
        },
        data: JSON.stringify(body)
      }
    );

    dispatch({
      type: REMOVE_ITEM_FROM_CART_SERVER,
      payload: res.data
    });
  } catch (err) {
    alert("remove item from cart (server call) get error", err.msg);
  }
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: id
  });
};

export const clearCart = () => async dispatch => {
  dispatch({ type: CLEAR_CART });
};

export const addItemToCart = id => async dispatch => {
  setLoading();
  // console.log("add item to cart get called..");
  try {
    const res1 = await axios.get(
      `https://quiet-dawn-64698.herokuapp.com/api/items/${id}`
    );
    //dispatch to cart
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: res1.data
    });
  } catch (err) {
    alert("add item to cart got error when fetcing", err);
  }
};

//update on server side
export const addItemToCartServer = id => async dispatch => {
  const body = {
    id: id
  };
  // console.log("check body", JSON.stringify(body));
  try {
    const res = await axios.post(
      "https://quiet-dawn-64698.herokuapp.com/api/users/cart",
      body
    );

    dispatch({
      type: REMOVE_ITEM_FROM_CART_SERVER,
      payload: res.data
    });
  } catch (err) {
    alert("add item to cart (server call) get error", err.msg);
  }
};

const setLoading = () => async dispatch => {
  return {
    type: SET_LOADING
  };
};

export const removeOneItemFromCart = id => async dispatch => {
  const body = {
    id: id,
    allOrSingle: "single"
  };

  try {
    // console.log("chekc header:", axios.defaults.headers);
    const res = await axios.delete(
      "https://quiet-dawn-64698.herokuapp.com/api/users/cart",
      {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token")
        },
        data: JSON.stringify(body)
      }
    );

    dispatch({
      type: REMOVE_ITEM_FROM_CART_SERVER,
      payload: res.data
    });
    dispatch({
      type: REMOVE_ONE_ITEM_FROM_CART,
      payload: id
    });
  } catch (err) {
    alert("remove item from cart (server call) get error", err.msg);
  }
};
// removeOneItemFromCartServer

export const checkOut = () => async dispatch => {
  // console.log("get check here.");
  alert(
    "Check out function has not been implemented. It's not for this Project"
  );
};
