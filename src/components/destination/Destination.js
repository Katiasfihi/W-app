import React from "react";
import { Translation } from "react-i18next";

import logo from "../../photos/20200614_220426.jpg";

function Destination() {
  return (
    <Translation>
      {(t) => (
        <div id="destination" className="about">
          <div className="wrapper">
            <img src={logo} alt="Logo" className="about__img" />
          </div>
          <div lassName="about__title">{t("Destination")}</div>
          <div className="about__introduction">{t("Destination0")}</div>
          <div className="about__introduction">{t("Destination1")}</div>
          <div className="about__introduction">{t("Destination2")}</div>
          <div className="about__introduction">{t("Destination3")}</div>
        </div>
      )}
    </Translation>
  );
}

export default Destination;
