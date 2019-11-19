import { SET_LOADING, GET_ITEMS, GET_ITEM } from "../actions/types";

const initialState = {
  items: null,
  item: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state,
        item: action.payload
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
    default:
      return state;
  }
};
