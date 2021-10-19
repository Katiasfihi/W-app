
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/login/Login'
import Pages from './components/pages/Pages'
import Rsvp from './components/rsvp/Rsvp';
import Thankyou from './components/thank-you/Thankyou';

import { Translation } from "react-i18next";
import ChangeLang from "./components/changeLang/ChangLang";

import './App.css';


import i18n from "i18next";


export default class App extends React.Component {
  state = {
    lang: "en"
  };
  langChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      localStorage.setItem("lang", this.state.lang);
      const lang = localStorage.getItem("lang");
      i18n.changeLanguage(lang);
    });
  };
  render() {
    const { t } = this.props;
    console.log(t, 'eeeeeeeeeeeee')
    const { lang } = this.state;
    return (
      <div>
        <select
          className="selectBox"
          onChange={this.langChange}
          name="lang"
          value={lang}
        >
          <option className="optionsMenu" value="en">
            English
          </option>
          <option className="optionsMenu" value="tm">
            Tamil(தமிழ்)
          </option>
          <option className="optionsMenu" value="tl">
            Telugu(తెలుగు)
          </option>
          <option className="optionsMenu" value="sp">
            Spanish(española)
          </option>
        </select>
        <p className="textToChange">{t("Hi")}</p>
        <p className="textToChange">{t("Actions")}</p>
        <Router>
          <Switch>
            <Route component={Login} getTranslate={t} path="/login"/> 
          </Switch>
          <Switch>
            <Route component={Pages} path="/pages" /> 
          </Switch>
          <Switch>
            <Route component={Rsvp} path="/rsvp" /> 
          </Switch>
          <Switch>
            <Route component={Thankyou} path="/thankyou" /> 
          </Switch>
      </Router>
      </div>
    );
  }
}




