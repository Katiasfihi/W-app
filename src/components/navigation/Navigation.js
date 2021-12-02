import React, { useState, useEffect } from "react";
import i18n from "i18next";

import { Fade as Hamburger } from "hamburger-react";

const Navigation = () => {
  const [lang, setLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? window.removeEventListener("scroll", noScroll)
      : window.addEventListener("scroll", noScroll);
  }, [isOpen]);

  const langChange = (e) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  const noScroll = () => window.scrollTo(0, 0);

  const handleBurger = () => {
    setIsOpen(!isOpen);
  };

  console.log("isOpen ", isOpen);
  return (
    <div className="navigation">
      <div className="translation-wrapper">
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
      <div className="burger-wrapper">
        <Hamburger direction="right" toggled={isOpen} toggle={handleBurger} />
      </div>
    </div>
  );
};

export default Navigation;
