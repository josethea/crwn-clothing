/*Un middleware es el medio entre nuestras actions y nuestro root-reducer
son prácticamente funciones que reciben actions y luego hacen algo con ellas*/

import { createStore, applyMiddleware } from "redux";
/*permite que nuestro navegador  almacene en caché el store*/
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
