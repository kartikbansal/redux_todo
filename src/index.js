import React from "react";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import todoApp from "./reducers/reducers";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { loadState, saveState } from "./localStorage";
import App from "./components/App";

const initialState = loadState();

const store = createStore(todoApp, initialState);

store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
