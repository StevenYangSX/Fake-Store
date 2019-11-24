import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
  SET_LOADING
} from "../actions/types";

const initialState = {
  items: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return {
        items: [],
        loading: false
      };

    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        loading: false,
        items: state.items.filter(item => item._id !== action.payload)
      };

    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
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
