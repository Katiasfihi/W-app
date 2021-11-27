import React from "react";
import { Translation } from "react-i18next";

import logo from "../../photos/20200614_220426.jpg";

import "./Destination.scss";

function Destination() {
  return (
    <Translation>
      {(t) => (
        <div id="destination" className="destination">
            <div className="wrapper">
              <img src={logo} alt="Logo" className="destination__img" />
            </div>
            <div className="destination__title">{t("Destination")}</div>
            <div className="destination__introduction">{t("Destination0")}</div>
            <div className="destination__introduction">{t("Destination1")}</div>
            <div className="destination__introduction">{t("Destination2")}</div>
            <div className="destination__introduction">{t("Destination3")}</div>
        </div>
      )}
    </Translation>
  );
}

export default Destination;
