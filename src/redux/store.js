/*Un middleware es el medio entre nuestras actions y nuestro root-reducer
son prácticamente funciones que reciben actions y luego hacen algo con ellas*/

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;