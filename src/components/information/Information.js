import React, { useState } from "react";
import { Translation } from "react-i18next";

import logo1 from "../../photos/miamibr.jpg";
import logo3 from "../../photos/berlin2br.jpg";

import "./Information.scss";

function Information() {
  const nice = "Nice";
  const [city, setCity] = useState("nice");
  const Villefranche = "Villefranche sur Mer";
  const hotel = "Hotel deals";

  return (
    <Translation>
      {(t) => (
        <div className="info">
          <div className="info__section">
            <img src={logo1} alt="Logo" className="info__section-img" />
            <div className="info__title" id="accommodation">
              Accommodation
            </div>

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
                  onClick={() => setCity("villefranche")}
                  className={`city ${
                    city === "villefranche" ? "selected" : "city"
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

              {city !== "hotel" && (
                <>
                  <p>{t(`text_information_${city}`)}</p>
                  <a
                    target="_blank"
                    href="https://www.lonelyplanet.com/france/nice"
                  >
                    {t(`text_information_${city}0`)}
                  </a>
                  <p>{t(`text_information_${city}1`)}</p>

                  {city === "villefranche" ? (
                    <a target="_blank" href="bit.ly/nice_airbnb">
                      {t(`text_information_${city}2`)}
                    </a>
                  ) : (
                    <p>
                      {t(`text_information_${city}2`)} <br />
                      <a target="_blank" href="bit.ly/nice_airbnb">
                        {t(`text_information_${city}3`)}
                      </a>
                    </p>
                  )}
                </>
              )}
              {city === "hotel" && (
                <>
                  <p>{t("text_information_hotel")}</p>
                  <div className="info__section-hotel">
                    <a
                      href="https://all.accor.com/hotel/8234/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps"
                      target="_blank"
                    >
                      <p className="info__section-hotel-name">
                        {t("text_information_hotel_0_title")}
                      </p>
                      <p className="info__section-hotel-address">
                        {t("text_information_hotel_0_address")}
                      </p>
                    </a>
                    <p className="info__section-hotel-deal">
                      {t("text_information_hotel_0_deal")}
                    </p>
                    <p className="info__section-hotel-deal">
                      {t("text_information_hotel_0_second_deal")}
                    </p>
                  </div>

                  <div className="info__section-hotel">
                    <a
                      href="https://www.marriott.com/hotels/travel/mcmcd-riviera-marriott-hotel-la-porte-de-monaco/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MjY5NjEzMy03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"
                      target="_blank"
                    >
                      <p className="info__section-hotel-name">
                        {t("text_information_hotel_1_title")}
                      </p>
                      <p className="info__section-hotel-address">
                        {t("text_information_hotel_1_address")}
                      </p>
                      <p className="info__section-hotel-address">
                        {t("text_information_hotel_1_address_tip")}
                      </p>
                    </a>
                    <p className="info__section-hotel-deal">
                      {t("text_information_hotel_1_deal")}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          <img src={logo3} alt="Logo" className="info__section-img"></img>
        </div>
      )}
    </Translation>
  );
}

export default Information;
