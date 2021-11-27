import React from "react";
import "./Schedule.scss";

// import logo from "../../photos/20210530_174347MBB.jpg";
import logo1 from "../../photos/image2BB.jpg";

import { Translation } from "react-i18next";

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
                <div className="schedule__venue">Jardins de la Citadelle</div>
                <div className="schedule__address">
                  {t("meeting1")}
                  <br></br>
                  <br></br>06230, Villefranche-sur-Mer, <br></br>France
                </div>
              </div>

              <div className="schedule__cap">
                <div className="schedule__venue">Atrego</div>
                <div className="schedule__address">
                  {t("meeting2")} <br></br>
                  <br></br>Port de Cap d'Ail, <br></br>06320 Cap-d'Ail,
                  <br></br>France
                </div>
              </div>
              <div className="schedule__nice">
                <div className="schedule__venue">Farago on the roof</div>
                <div className="schedule__address">
                  {t("meeting3")}
                  <br></br>
                  <br></br>Rooftop de l'AC Hotel by Marriott Nice, <br></br>
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
