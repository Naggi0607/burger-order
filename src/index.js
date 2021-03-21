import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import burgerReducer from "./redux/reducer/burgerReducer";
import { getNodeText } from "@testing-library/dom";
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("My logger middleware actions:", action);
      console.log("My logger middleware state : ", store.getState());
      const result = next(action);
      console.log("My logger middleware result : ", store.getState());

      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  burgerReducer,
  composeEnhancers(applyMiddleware(logger))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
