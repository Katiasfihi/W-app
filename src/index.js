import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import i18n from "./components/langConfig/LangConfig";
import { Translation } from "react-i18next";

export const translations = i18n;

ReactDOM.render(
  <React.StrictMode>
    <Translation>{(t) => <App t={t} />}</Translation>
  </React.StrictMode>,
  document.getElementById("root")
);
