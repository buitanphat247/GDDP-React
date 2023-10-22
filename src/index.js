import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./store/configureStore";
import { Analytics } from "@vercel/analytics/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
        rtl={false}
        draggable
        theme="light"
      ></ToastContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    <Analytics id="prj_9ewt3kcCiR1Ebka4qKdnAsYzIiPL" />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
