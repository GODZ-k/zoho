import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer position="top-center" theme="dark" autoClose={2000} hideProgressBar />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
