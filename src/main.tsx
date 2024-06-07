import { RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./characters/styles/index.scss";
import mainRouter from "./router/mainRouter.js";
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={mainRouter} />
    </Provider>
  </React.StrictMode>,
);
