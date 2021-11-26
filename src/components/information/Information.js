import React, { useState } from "react";
import "./Information.scss";

import logo1 from "../../photos/image2BB.jpg";
import logo2 from "../../photos/20210531_175424BBB.jpg";
import logo3 from "../../photos/city.jpg";

import { Translation } from "react-i18next";

function Information() {
  const nice = "Nice";
  const [city, setCity] = useState("nice");
  const Villefranche = "Villefranche sur Mer";
  const hotel = "Hotel deals";

  return (
    <Translation>
      {(t) => (
        <div id="information" className="info">
          <div className="info__section">
            <img src={logo1} alt="Logo" className="info__section-img" />
            <div className="info__title">Lodging</div>

            <div className="info__section-text-wrapper">
              <p>{t("text_information1")}</p>
              <div className="cities">
                <text
                  onClick={() => setCity("nice")}
                  className={`city ${city === "nice" ? "selected" : "city"}`}
                >
                  {nice}
                </text>

                <text
                  onClick={() => setCity("Villefranche")}
                  className={`city ${
                    city === "Villefranche" ? "selected" : "city"
                  }`}
                >
                  {Villefranche}
                </text>
                <text
                  onClick={() => setCity("hotel")}
                  className={`city ${city === "hotel" ? "selected" : "city"}`}
                >
                  {hotel}
                </text>
              </div>

              {city === "nice" && (
                <>
                  <p>{t("text_information_nice")}</p>
                  <p>{t("text_information_nice0")}</p>
                  <p>{t("text_information_nice1")}</p>
                  <p>{t("text_information_nice2")}</p>
                  <p>{t("text_information_nice3")}</p>
                </>
              )}

              {city === "Villefranche" && (
                <>
                  <p>{t("text_information_villefranche")}</p>
                  <p>{t("text_information_villefranche0")}</p>
                  <p>{t("text_information_villefranche1")}</p>
                  <p>{t("text_information_villefranche2")}</p>
                </>
              )}

              {city === "hotel" && (
                <>
                  <p>{t("text_information_hotel")}</p>
                  <p>{t("text_information_hotel0")}</p>
                  <p>{t("text_information_hotel1")}</p>
                  <p>{t("text_information_hotel2")}</p>
                  <p>{t("text_information_hotel3")}</p>

                </>
              )}
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
