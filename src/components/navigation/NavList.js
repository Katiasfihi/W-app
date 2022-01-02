import React from "react";
import { Translation } from "react-i18next";

const NavList = ({ handleBurger, isMobile }) => (
  <Translation>
    {(t) => (
      <div className="navigation__list-wrapper">
        <ul className="navigation__list">
          {isMobile && (
            <li className="navigation__list-item">
              <a
                href="#about"
                onClick={handleBurger}
                className="navigation__link"
              >
                {t(`About`)}
              </a>
            </li>
          )}
          <li className="navigation__list-item">
            <a
              href="#schedule"
              onClick={handleBurger}
              className="navigation__link"
            >
              {t(`Schedule`)}
            </a>
          </li>
          <li className="navigation__list-item">
            <a
              href="#destination"
              onClick={handleBurger}
              className="navigation__link"
            >
              {t(`Destination`)}
            </a>
          </li>
          <li className="navigation__list-item">
            <a
              href="#accommodation"
              onClick={handleBurger}
              className="navigation__link"
            >
              {t(`Accommodation`)}
            </a>
          </li>
          <li className="navigation__list-item">
            <a
              href="#getting-there"
              onClick={handleBurger}
              className="navigation__link"
            >
              {t(`gettingThere`)}
            </a>
          </li>
          <li className="navigation__list-item">
            <a
              href="#parking-section"
              onClick={handleBurger}
              className="navigation__link"
            >
              {t(`parking`)}
            </a>
          </li>
        </ul>
      </div>
    )}
  </Translation>
);

export default NavList;
