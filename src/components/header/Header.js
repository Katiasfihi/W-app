import React from "react";
import "./Header.scss";
import { Translation } from "react-i18next";

import logos from "../../photos/icons8-down-arrow-50.png";
import TypewriterComponent from "typewriter-effect";

function Header() {
  return (
    <Translation>
      {(t) => (
        <div>
          <div className="menu-wrapper"></div>
          <h1 className="katia">Katia & Carol</h1>
          <div className="married">
            <TypewriterComponent
              onInit={(typeWriter) => {
                typeWriter
                  .pause(2000)
                  .typeString("are getting married.")
                  .start();
              }}
            />
          </div>
          <div></div>

          <div className="scroll">SCROLL FOR MORE</div>
          <div className="arrow-container">
            <a href="#about">
              <img src={logos} alt="Logo" className="arrow" />
            </a>
          </div>
        </div>
      )}
    </Translation>
  );
}

export default Header;
