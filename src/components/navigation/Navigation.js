import React, { useState, useEffect } from "react";
import i18n from "i18next";

import { Fade as Hamburger } from "hamburger-react";

import "./Navigation.scss";

const Navigation = () => {
  const [lang, setLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.querySelector("body").className = "no-scroll")
      : (document.querySelector("body").className = "");
  }, [isOpen]);

  const langChange = (e) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  const handleBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navigation">
      <div className="navigation__translation">
        <select
          className="selectBox"
          onChange={(e) => langChange(e)}
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
      </div>
      <div className="navigation__burger">
        <Hamburger direction="right" toggled={isOpen} toggle={handleBurger} />
      </div>
      {isOpen && (
        <div className="navigation__list-wrapper">
          <ul className="navigation__list">
            <li className="navigation__list-item">
              <a
                href="#about"
                onClick={handleBurger}
                className="navigation__link"
              >
                About
              </a>
            </li>
            <li className="navigation__list-item">
              <a
                href="#schedule"
                onClick={handleBurger}
                className="navigation__link"
              >
                Schedule
              </a>
            </li>
            <li className="navigation__list-item">
              <a
                href="#destination"
                onClick={handleBurger}
                className="navigation__link"
              >
                Destination
              </a>
            </li>
            <li className="navigation__list-item">
              <a
                href="#accommodation"
                onClick={handleBurger}
                className="navigation__link"
              >
                Accommodation
              </a>
            </li>
            <li className="navigation__list-item">
              <a
                href="#getting-there"
                onClick={handleBurger}
                className="navigation__link"
              >
                Getting there
              </a>
            </li>
            <li className="navigation__list-item">
              <a
                href="#parking-section"
                onClick={handleBurger}
                className="navigation__link"
              >
                Parking
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
