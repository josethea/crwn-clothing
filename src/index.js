import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  /*Provider nos permite tener acceso a todas las cosas relacionadas con la store(redux), el cual 
    sirve para almacenar el estado de las variables.*/
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
