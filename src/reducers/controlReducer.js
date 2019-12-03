import {
  SET_PRICE_ONE,
  SET_PRICE_TWO,
  SET_PRICE_THREE,
  CHANGE_FEATURED,
  CHANGE_ON_SALE,
  SET_PRICE_NULL
} from "../actions/types";

const initialState = {
  priceInterval: null,
  ifFeatured: null,
  ifOnSale: null,
  ifSorted: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRICE_NULL:
      return {
        ...state,
        priceInterval: null
      };
    case SET_PRICE_ONE:
    case SET_PRICE_TWO:
    case SET_PRICE_THREE:
      return {
        ...state,
        priceInterval: action.payload
      };
    case CHANGE_FEATURED:
      if (state.ifFeatured === null || state.ifFeatured === false) {
        return {
          ...state,
          ifFeatured: true
        };
      }
      if (state.ifFeatured === true) {
        return {
          ...state,
          ifFeatured: false
        };
      }
      break;
    case CHANGE_ON_SALE:
      if (state.ifOnSale === null || state.ifOnSale === false) {
        return {
          ...state,
          ifOnSale: true
        };
      }
      if (state.ifOnSale === true) {
        return {
          ...state,
          ifOnSale: false
        };
      }
      break;
    default:
      return state;
  }
};
