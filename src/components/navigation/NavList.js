import React from "react";

const NavList = ({ handleBurger, isMobile }) => (
  <div className="navigation__list-wrapper">
    <ul className="navigation__list">
      {isMobile && (
        <li className="navigation__list-item">
          <a href="#about" onClick={handleBurger} className="navigation__link">
            About
          </a>
        </li>
      )}
      <li className="navigation__list-item">
        <a href="#schedule" onClick={handleBurger} className="navigation__link">
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
);

export default NavList;
