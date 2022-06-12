import React from "react";
import ReactDOM from "react-dom/client";
import ConteinerApp from "./ConteinerApp";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      <ConteinerApp />
  </Provider>
);

reportWebVitals();
