import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import i18n from './components/langConfig/LangConfig'
import { Translation } from "react-i18next";
// import ChangeLang from "./components/changeLang/ChangLang";



ReactDOM.render(
  <React.StrictMode>
     <Translation>{t =>  <App t={t} />}</Translation>
    {/* <Translation>{t => <ChangeLang t={t} />}</Translation> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
