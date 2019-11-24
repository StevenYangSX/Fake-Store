import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  items: itemsReducer,
  user: userReducer,
  cart: cartReducer
});
