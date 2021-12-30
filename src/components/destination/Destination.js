import React from "react";
import { Translation } from "react-i18next";

import logo from "../../photos/20200614_220426-min.jpg";

import "./Destination.scss";

function Destination({ isMobile }) {
  return (
    <Translation>
      {(t) => (
        <div className="destination" id="destination">
          {/* {isMobile && (
            <div className="wrapper">
              <img src={logo} alt="Logo" className="destination__img" />
            </div>
          )} */}
          <div className="destination__content">
            {isMobile && (
              <div className="wrapper">
                <img src={logo} alt="Logo" className="destination__img" />
              </div>
            )}
            <div className="destination__image"></div>

            <div className="destination__details">
              <div className="destination__title">{t("Destination")}</div>
              <div className="destination__introduction">
                {t("Destination0")}
              </div>
              <div className="destination__introduction">
                {t("Destination1")}
              </div>
              <div className="destination__introduction">
                {t("Destination2")}
              </div>
              <div className="destination__introduction">
                {t("Destination3")}
              </div>
            </div>
          </div>
        </div>
      )}
    </Translation>
  );
}

export default Destination;
