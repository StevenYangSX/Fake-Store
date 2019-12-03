import {
  SET_LOADING,
  GET_ITEMS,
  GET_ITEM,
  SEARCH_ITEM_BRAND,
  SEARCH_ITEM_CAT,
  SEARCH_ITEM_FAIL,
  SEARCH_ITEM_NAME
} from "../actions/types";

const initialState = {
  items: null,
  item: null,
  loading: false,
  error: null,
  redirect: null,
  searchInfo: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state,
        item: action.payload,
        loading: false
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH_ITEM_NAME:
      return {
        ...state,
        items: action.payload[0],
        loading: false,
        redirect: "name",
        searchInfo: action.payload[1]
      };
    case SEARCH_ITEM_BRAND:
      return {
        ...state,
        items: action.payload[0],
        loading: false,
        redirect: "brand",
        searchInfo: action.payload[1]
      };
    case SEARCH_ITEM_CAT:
      return {
        ...state,
        items: action.payload[0],
        loading: false,
        redirect: "category",
        searchInfo: action.payload[1]
      };
    case SEARCH_ITEM_FAIL:
      return {
        ...state,
        item: [],
        loading: false,
        redirect: false
      };
    default:
      return state;
  }
};
