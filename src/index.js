import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./store";

ReactDOM.render(
  //<React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>,
   //</React.StrictMode>,?????? bug in development enviroment not in production
  document.getElementById("root")
);
