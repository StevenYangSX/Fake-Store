import axios from "axios";
import {
  GET_ITEMS,
  SET_LOADING,
  GET_ITEM,
  SEARCH_ITEM_BRAND,
  SEARCH_ITEM_CAT,
  SEARCH_ITEM_FAIL,
  SEARCH_ITEM_NAME
} from "./types";

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
    alert(err);
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
  // console.log("set loading to true");
  return {
    type: SET_LOADING
  };
};
//set redirect to true
// const setRedirect = () => {
//   console.log("set redirect to true");
//   return {
//     type: SET_REDIRECT
//   };
// };

const brandOrCategory = inputStr => {
  //
  const brands = [
    "gibson",
    "fender",
    "casio",
    "yamaha",
    "carlsbro",
    "audio-technica",
    "shure",
    "mxr",
    "behringer",
    "apple",
    "asus rog",
    "logitech",
    "lg",
    "dell",
    "alienware",
    "google",
    "canon",
    "hp",
    "instant pot",
    "de longhi",
    "hamilton",
    "kitchenaid",
    "insignia",
    "breville",
    "vitamix",
    "sumbeam",
    "samsung"
  ];
  const categories = [
    "appliances",
    "cell phones",
    "computer",
    "musical instrument"
  ];
  const name = [
    "headphones",
    "microphone",
    "effect pedal",
    "amp",
    "audio interface",
    "macbook pro",
    "gaming pc",
    "bluetooth laser mouse",
    "gaming monitor",
    "amplifier",
    "power adapter",
    "keyboard case",
    "printer",
    "all-in-one desktop pc",
    "guitar",
    "keyboard",
    "drum",
    "fryer",
    "water filter",
    "iPhone",
    "galaxy"
  ];
  if (brands.some(ele => ele === inputStr)) {
    return "brand";
  } else if (categories.some(ele => ele === inputStr)) {
    return "category";
  } else if (name.some(ele => ele === inputStr)) {
    return "name";
  } else {
    return "notMatch";
  }
};

export const searchItem = itemWanted => async dispatch => {
  //event.preventDefault();
  setLoading();
  const input = brandOrCategory(itemWanted);

  try {
    if (input === "brand") {
      const upperInput =
        itemWanted.charAt(0).toUpperCase() + itemWanted.slice(1);
      //  console.log("In searchItem, upperInput is 1:", upperInput);
      const res = await axios.get(
        `https://quiet-dawn-64698.herokuapp.com/api/items/brand/${upperInput}`
      );
      dispatch({ type: SEARCH_ITEM_BRAND, payload: [res.data, itemWanted] });
      // this.props.history.push(`/items/brand/${upperInput}`);
      //callback(input, itemWanted);
      //console.log(callback);
    } else if (input === "category") {
      //  console.log("In searchItem, upperInput is 2:", itemWanted);
      const res = await axios.get(
        `https://quiet-dawn-64698.herokuapp.com/api/items/category/${itemWanted}`
      );
      dispatch({ type: SEARCH_ITEM_CAT, payload: [res.data, itemWanted] });
      //ownProps.history.push(`/items/category/${itemWanted}`);
    } else if (input === "name") {
      //  console.log("In searchItem, upperInput is 3:", itemWanted);
      const upperInput =
        itemWanted.charAt(0).toUpperCase() + itemWanted.slice(1);
      const res = await axios.get(
        `https://quiet-dawn-64698.herokuapp.com/api/items/name/${upperInput}`
      );
      dispatch({ type: SEARCH_ITEM_NAME, payload: [res.data, itemWanted] });
    } else if (input === "notMatch") {
      //  console.log("In searchItem, upperInput is 4:", itemWanted);
      dispatch({ type: SEARCH_ITEM_FAIL });
    }
  } catch (err) {
    //console.log("check point 5");
    alert("Search by brand or category failed.", err);
  }
};
