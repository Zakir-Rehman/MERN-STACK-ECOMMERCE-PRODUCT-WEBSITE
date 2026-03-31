import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import "./index.css";
  import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContextApi from './Context/ContextApi.jsx';
ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextApi>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextApi>
);
