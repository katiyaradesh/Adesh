import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./config/routeConfig";
// import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import store from './config/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
    </nav>
    <div className="container mt-3">
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </div></>,
  document.getElementById("root")
);

// reportWebVitals();
