import React from "react";
import { Translation } from "react-i18next";

import logo1 from "../../photos/latimers2br-min.jpg";

import "./Schedule.scss";

const Schedule = () => {
  return (
    <Translation>
      {(t) => (
        <div className="schedule">
          <div className="schedule__moutain-pic-wrapper">
            <img src={logo1} alt="Logo" className="schedule__moutain-pic"></img>
          </div>

          <h3 className="schedule__title-wrapper" id="schedule">
            Schedule
          </h3>
          <div className="schedule__bloc-wrapper">
            <div className="schedule__info-wrapper">
              <text className="schedule__text-schedule">
                {t("text_schedule")}
                <br></br>
                <br></br>
                {t("text_schedule0")}
                <br></br>
                <br></br>
                {t("text_schedule1")}
                <br></br>
                <br></br>
                {t("text_schedule2")}
              </text>
            </div>

            <div className="schedule__location">
              <div className="schedule__villefranche">
                <div className="schedule__venue">
                  <a
                    href="https://www.nicetourisme.com/nice/16 5-citadelle-de-villefranche-sur-mer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jardins de la Citadelle
                  </a>
                </div>
                <div className="schedule__address">
                  {t("meeting1")}
                  <br></br>
                  <br></br>06230, Villefranche-sur-Mer, <br></br>France
                </div>
              </div>

              <div className="schedule__cap">
                <div className="schedule__venue">
                  <a
                    href="https://www.restaurantatrego.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    A&apos;trego
                  </a>
                </div>
                <div className="schedule__address">
                  {t("meeting2")} <br></br>
                  <br></br>Port de Cap d&apos;Ail, <br></br>06320
                  Cap-d&apos;Ail,
                  <br></br>France
                </div>
              </div>
              <div className="schedule__nice">
                <div className="schedule__venue">
                  <a
                    href="https://www.faragoontheroof.com/en/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Farago on the roof
                  </a>
                </div>
                <div className="schedule__address">
                  {t("meeting3")}
                  <br></br>
                  <br></br>Rooftop de l&apos;AC Hotel by Marriott Nice,{" "}
                  <br></br>
                  Rue Honoré Sauvan, Entrée, 59 Prom. des Anglais, <br></br>
                  06000 Nice,<br></br>France
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Translation>
  );
};

export default Schedule;
