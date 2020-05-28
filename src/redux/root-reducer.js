/*este archivo terminara siendo el código real que 
combina todos nuestros otros estados juntos. */

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

/*Esto es un objeto Json que representa las
configuraciones posibles que queremos*/

const persistConfig = {
  key: "root",
  storage,
  /*aqui se ponen todos los reducer que queremos que guarde.*/
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});
 
export default persistReducer(persistConfig, rootReducer);
