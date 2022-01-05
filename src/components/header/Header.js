import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Translation } from "react-i18next";

import logos from "../../photos/icons8-down-arrow-50.png";
import TypewriterComponent from "typewriter-effect";

function Header() {
  const [typeString, setTypeString] = useState("are getting married.");
  const [scrollText, setScrollText] = useState("SCROLL FOR MORE");
  const language = localStorage.getItem("language");
  useEffect(() => {
    if (language === "ro") {
      setTypeString("se căsătoresc.");
      setScrollText("MAI MULTE INFORMATII");
    } else {
      setTypeString("are getting married.");
      setScrollText("SCROLL FOR MORE");
    }
  }, [language]);

  return (
    <Translation>
      {(t) => (
        <div>
          <div className="menu-wrapper"></div>
          <h1 className="katia">Katia &#38; Carol</h1>
          <div className="married">
            {language === "ro" && (
              <TypewriterComponent
                onInit={(typeWriter) => {
                  typeWriter.pause(2000).typeString(typeString).start();
                }}
              />
            )}
            {language !== "ro" && (
              <TypewriterComponent
                onInit={(typeWriter) => {
                  typeWriter.pause(2000).typeString(typeString).start();
                }}
              />
            )}
          </div>
          <div className="scroll">{scrollText}</div>
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
