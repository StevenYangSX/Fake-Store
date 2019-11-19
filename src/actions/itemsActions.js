import axios from "axios";
import { GET_ITEMS, SET_LOADING, GET_ITEM } from "./types";

export const getItem = id => async dispatch => {
  try {
    console.log("checking point at getItem() in action.");

    setLoading();
    console.log("loading set to true after call.");
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
    console.log("checking point at getItemsss() in action.");
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
  console.log("set loading to true");
  return {
    type: SET_LOADING
  };
};
