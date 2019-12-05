import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
  SET_LOADING,
  REMOVE_ONE_ITEM_FROM_CART
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
    case REMOVE_ONE_ITEM_FROM_CART:
      const idArr = [];
      state.items.forEach(ele => idArr.push(ele._id));
      //console.log("check id arr", idArr);
      const targetIndex = idArr.indexOf(action.payload);
      // console.log("check targetIdex", targetIndex);
      const fakeState = state.items;
      //console.log(state.items.slice(targetIndex, 1));
      //console.log(temp);
      //eslint-disable-next-line
      const removed = fakeState.splice(targetIndex, 1);
      // console.log(removed);
      //  //maybe need to check target Index
      // console.log(fakeState);
      return {
        ...state,
        loading: false,
        items: fakeState
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
