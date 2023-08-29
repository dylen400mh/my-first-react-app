import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Greeting from "./Greeting.jsx";
import { Food } from "./Food.jsx";
import Person from "./Person.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Person />
  </React.StrictMode>
);
