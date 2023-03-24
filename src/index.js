import React, { Component } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";

import { Physics } from "@react-three/cannon";
import { App } from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
