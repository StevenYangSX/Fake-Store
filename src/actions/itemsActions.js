import axios from "axios";
import { GET_ITEMS, SET_LOADING, GET_ITEM, ADD_TO_CART } from "./types";

export const getItem = id => async dispatch => {
  try {
    setLoading();
    const res = await axios.get(
      `https://quiet-dawn-64698.herokuapp.com/api/items/${id}`
    );
    dispatch({
      type: GET_ITEM,
      payload: res.data
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getItems = () => async dispatch => {
  try {
    setLoading();
    const res = await axios.get(
      "https://quiet-dawn-64698.herokuapp.com/api/items"
    );
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    });
  } catch (err) {
    alert(err);
  }
};

//set loading to true
const setLoading = () => {
  console.log("set loading to true");
  return {
    type: SET_LOADING
  };
};
