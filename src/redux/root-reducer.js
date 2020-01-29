/*este archivo terminara siendo el código real que 
combina todos nuestros otros estados juntos. */

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
