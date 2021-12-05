import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { Translation } from "react-i18next";

import { useMediaQuery } from "@react-hook/media-query";

import { Fade as Hamburger } from "hamburger-react";
import NavList from "./NavList";

import "./Navigation.scss";

const Navigation = ({ noBurger }) => {
  const [lang, setLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("only screen and (max-width: 992px)");
  const navOnMobile = isOpen && isMobile;
  const navOnDesktop = !isMobile;

  useEffect(() => {
    setLang(localStorage.getItem("language"));
    isOpen && isMobile
      ? (document.querySelector("body").className = "no-scroll")
      : (document.querySelector("body").className = "");
  }, [isOpen]);

  const langChange = (e) => {
    setLang(e.target.value);
    localStorage.setItem("language", e.target.value);
    const localLang = localStorage.getItem("language");
    i18n.changeLanguage(localLang);
  };

  const handleBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Translation>
      {(t) => (
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
          {!noBurger && isMobile && (
            <div className="navigation__burger">
              <Hamburger
                direction="right"
                toggled={isOpen}
                toggle={handleBurger}
              />
            </div>
          )}
          {navOnDesktop && <NavList handleBurger={handleBurger} />}
          {navOnMobile && <NavList handleBurger={handleBurger} isMobile />}
        </div>
      )}
    </Translation>
  );
};

export default Navigation;
