import React from "react";
import "./Information.scss";

import logo1 from "../../photos/image2BB.jpg";
import logo2 from "../../photos/20210531_175424BBB.jpg";
import logo3 from "../../photos/city.jpg";

import { Translation } from "react-i18next";

function Information() {
  return (
    <Translation>
      {(t) => (
        <div id="information" className="info">
          <div className="info__section">
            <img src={logo1} alt="Logo" className="info__section-img" />

            <div className="info__section-text-wrapper">
              <p>{t("text_information1")}</p>
              <p>{t("text_information2")}</p>
            </div>
          </div>

          <div className="info__section">
            <img src={logo3} alt="Logo" className="info__section-img" />
            <div className="info__section-text-wrapper">
              <p>{t("text_information3")}</p>
              <p>{t("text_information4")}</p>
            </div>
          </div>

          <div className="info__section">
            <img src={logo2} alt="Logo" className="info__section-img"></img>
          </div>
        </div>
      )}
    </Translation>
  );
}

export default Information;
