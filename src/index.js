import "./styles.css";
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.js"

const el=document.querySelector("#root");
const root=ReactDOM.createRoot(el);
root.render(<App/>)
