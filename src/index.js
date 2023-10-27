// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

// ReactDOM.render(
//   <Provider store={store}>
//       <App />
//   </Provider>,
//   document.getElementById("root")
// );

import React from "react";
import * as ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// reportWebVitals();
