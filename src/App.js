import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login/Login";
import logo from "../src/photos/icons8-menu-50.png";
import Pages from "./components/pages/Pages";
import Rsvp from "./components/rsvp/Rsvp";
import Thankyou from "./components/thank-you/Thankyou";
import { Fade as Hamburger } from "hamburger-react";

// import { Translation, useTranslation } from "react-i18next";
// import ChangeLang from "./components/changeLang/ChangLang";

import "./App.scss";

import i18n from "i18next";

export default class App extends React.Component {
  state = {
    lang: "en",
    isOpen: false,
  };

  langChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      localStorage.setItem("lang", this.state.lang);
      const lang = localStorage.getItem("lang");
      i18n.changeLanguage(lang);
    });
  };

  noScroll() {
    window.scrollTo(0, 0);
  }

  handleBurger = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    this.state.isOpen
      ? window.removeEventListener("scroll", this.noScroll)
      : window.addEventListener("scroll", this.noScroll);
  };

  render() {
    const { t } = this.props;
    const { lang, isOpen } = this.state;

    return (
      <>
        <div className="translation-wrapper">
          <select
            className={`selectBox ${
              this.state.translateGone ? "noselectBox" : "selectBox"
            }`}
            onChange={this.langChange}
            name="lang"
            value={lang}
          >
            <option className="optionsMenu" value="en">
              English
            </option>
            <option className="optionsMenu" value="fr">
              Français
            </option>
            <option className="optionsMenu" value="ro">
              Română
            </option>
          </select>
          <div className="burger-wrapper">
            <Hamburger
              direction="right"
              toggled={this.state.isOpen}
              toggle={this.handleBurger}
            />
          </div>
        </div>
        {isOpen && (
          <div className="mobile-navigation">
            <ul className="mobile-navigation__list">
              <li className="mobile-navigation__list-item">
                <a
                  href="#about"
                  onClick={this.handleBurger}
                  className="mobile-navigation__link"
                >
                  About
                </a>
              </li>
              <li className="mobile-navigation__list-item">
                <a
                  href="#schedule"
                  onClick={this.handleBurger}
                  className="mobile-navigation__link"
                >
                  Schedule
                </a>
              </li>
              <li className="mobile-navigation__list-item">
                <a
                  href="#destination"
                  onClick={this.handleBurger}
                  className="mobile-navigation__link"
                >
                  Destination
                </a>
              </li>
              <li className="mobile-navigation__list-item">
                <a
                  href="#accommodation"
                  onClick={this.handleBurger}
                  className="mobile-navigation__link"
                >
                  Accommodation
                </a>
              </li>
              <li className="mobile-navigation__list-item">
                <a
                  href="#getting-there"
                  onClick={this.handleBurger}
                  className="mobile-navigation__link"
                >
                  Getting there
                </a>
              </li>
              <li className="mobile-navigation__list-item">
                <a
                  href="#parking-section"
                  onClick={this.handleBurger}
                  className="mobile-navigation__link"
                >
                  Parking
                </a>
              </li>
            </ul>
          </div>
        )}
        <Router>
          <Switch>
            {/* <Translation>{t =>  <Login t={t} path="/login"/>}</Translation> */}

            <Route component={Login} t={t} path="/login" />
          </Switch>
          <Switch>
            {/* <Translation>{t =>  <Pages  component={Pages} t={t} path="/pages" />}</Translation> */}

            <Route component={Pages} path="/pages" />
          </Switch>
          <Switch>
            <Route component={Rsvp} path="/rsvp" />
          </Switch>
          <Switch>
            <Route component={Thankyou} path="/thankyou" />
          </Switch>
        </Router>
      </>
    );
  }
}
