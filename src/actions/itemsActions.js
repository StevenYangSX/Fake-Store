import axios from "axios";
import { GET_ITEMS, SET_LOADING, GET_ITEM } from "./types";

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
// export const getItems = () => {
//   return async (dispatch, getState) => {
//     setLoading();
//     const res = await fetch("");
//     const data = await res.json();

//     dispatch({
//       type: GET_ITEMS,
//       payload: data
//     });
//   };
// };
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
    console.log(err);
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
