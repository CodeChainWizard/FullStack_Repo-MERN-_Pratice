import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Data from "./Data/Data";
import Form_Fill from "./Data/Form";
import UseEffecr_state from "./useEffect_State/useEffecr_state.js";
import Fetch from "./useEffect_State/Fetch.js";
import Multiple_Return from "./useEffect_State/Multiple_Return.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <App />
  // <Data />
  // <Form_Fill />
  // <UseEffecr_state />
  // <Fetch />
  <Multiple_Return />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
