import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";

import { NextUIProvider } from "@nextui-org/react";

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
          <Router />
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
