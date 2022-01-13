import React, { useState } from "react";
import { Translation } from "react-i18next";

import logo1 from "../../photos/miamibr-min.jpg";
import logo3 from "../../photos/berlin2br-min.jpg";

import "./Information.scss";

function Information({ isMobile }) {
  const [city, setCity] = useState("nice");

  const language = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en";

  return (
    <Translation>
      {(t) => (
        <div className="info">
          <div className="info__section">
            <img src={logo1} alt="Logo" className="info__section-img" />

            <div className="info__section-text-wrapper">
              <div className="info__title" id="accommodation">
                {t(`Accommodation`)}
              </div>
              <p>{t("text_information1")}</p>
              <div className="cities">
                <text
                  onClick={() => setCity("nice")}
                  className={`city ${city === "nice" ? "selected" : "city"}`}
                >
                  {t("Nice")}
                </text>

                <text
                  onClick={() => setCity("villefranche")}
                  className={`city ${
                    city === "villefranche" ? "selected" : "city"
                  }`}
                >
                  {t("Villefranche")}
                </text>
                <text
                  onClick={() => setCity("hotel")}
                  className={`city ${city === "hotel" ? "selected" : "city"}`}
                >
                  {t("hotel")}
                </text>
              </div>

              {city !== "hotel" && (
                <>
                  <p>{t(`text_information_${city}`)}</p>

                  {language !== "fr" && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.lonelyplanet.com/france/nice"
                    >
                      {t(`text_information_${city}0`)}
                    </a>
                  )}
                  <p>{t(`text_information_${city}1`)}</p>

                  {city === "villefranche" ? (
                    <>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.bit.ly/nice_airbnb"
                      >
                        {t(`text_information_${city}2`)}
                      </a>
                      <br></br>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.booking.com/city/fr/villefranche-sur-mer.html?aid=1610684;label=villefranche-sur-mer-aXiuyQNXG_tM*95fT0nODwS379572385584:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-320254320177:lp9045945:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0;ws=&gclid=Cj0KCQiAuP-OBhDqARIsAD4XHpfFxP_j_RT87wjFY5mXcRZR9PtNjDdNIgEKwjR92-2S_hSlmRVoEp8aAsn5EALw_wcB"
                      >
                        {t(`text_information_${city}3_1`)}
                      </a>
                      <p>
                        {t(`text_information_${city}3`)} <br />
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href=" https://www.achills.com/"
                        >
                          {t(`text_information_${city}4`)}
                          <br />
                        </a>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href=" https://www.baiabella.com/"
                        >
                          {t(`text_information_${city}5`)}
                          <br />
                        </a>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="http://www.welcomehotel.com/"
                        >
                          {t(`text_information_${city}6`)}
                          <br />
                        </a>
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        {t(`text_information_${city}2`)} <br />
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.bit.ly/nice_airbnb"
                        >
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.booking.com/city/fr/nice.html?aid=1610684;label=nice-qny80Vm7ZibAwqtV*47xuAS379683536108:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-547910313:lp9045945:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0;ws=&gclid=Cj0KCQiAuP-OBhDqARIsAD4XHpeTLYxIMHmJg_TUhoVWkFCeMrNof7ARuJUNVel9zHTx0Fodyy5qL4QaAoX7EALw_wcB"
                          >
                            {t(`text_information_${city}3_1`)}
                          </a>
                          <br></br>
                          {t(`text_information_${city}3`)}
                          <br />
                        </a>
                      </p>
                      <p>
                        {t(`text_information_${city}4`)} <br />
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.hotelamouralaplage.fr/"
                        >
                          {t(`text_information_${city}5`)}
                          <br />
                        </a>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.leplongeoir.com/en/home/"
                        >
                          {t(`text_information_${city}6`)}
                          <br />
                        </a>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://boscolocollection.com/nice/rooftop-nice-la-terrace/"
                        >
                          {t(`text_information_${city}7`)}
                          <br />
                        </a>
                      </p>
                    </>
                  )}
                </>
              )}
              {city === "hotel" && (
                <>
                  <p>{t("text_information_hotel")}</p>
                  <ul className="info__section-hotel">
                    <a
                      href={`https://all.accor.com/hotel/8234/index.${language}.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="info__section-hotel-name">
                        {t("text_information_hotel_0_title")}
                      </p>
                      <p className="info__section-hotel-address">
                        {t("text_information_hotel_0_address")}
                      </p>
                    </a>

                    <li className="info__section-hotel-deal">
                      {t("text_information_hotel_0_deal_ibis")}
                    </li>
                    <li className="info__section-hotel-deal">
                      {t("text_information_hotel_1_deal_ibis")}
                    </li>
                    <li className="info__section-hotel-deal">
                      {t("text_information_hotel_2_deal_ibis")}
                    </li>
                    <p className="info__section-hotel-deal">
                      {t("text_information_hotel_deal_ibis")}
                    </p>
                  </ul>

                  <ul className="info__section-hotel">
                    <a
                      href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1639585030844&key=GRP&app=resvlink"
                      target="_blank"
                      rel="noreferrer"
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
                    <li className="info__section-hotel-deal">
                      {t("text_information_hotel_1_deal")}
                    </li>
                    <li className="info__section-hotel-deal">
                      {t("text_information_hotel_2_deal")}
                    </li>
                    <p className="info__section-hotel-deal">
                      {t("text_information_hotel_3_deal")}
                    </p>
                    <a
                      href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1639585030844&key=GRP&app=resvlink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("link_marriott")}
                    </a>
                    {language === "fr" && (
                      <p className="info__section-hotel-deal">
                        {t("text_information_hotel_4_deal")}
                      </p>
                    )}
                    {language !== "fr" && (
                      <p className="info__conclusion">
                        {t("text_information_hotel_5_deal")}
                      </p>
                    )}
                  </ul>
                </>
              )}
            </div>
          </div>

          {isMobile && (
            <img src={logo3} alt="Logo" className="info__section-img"></img>
          )}
        </div>
      )}
    </Translation>
  );
}

export default Information;
