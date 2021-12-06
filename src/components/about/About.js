import React from "react";
import "./About.scss";
import logo from "../../photos/parisbr-min.jpg";
import { useHistory } from "react-router-dom";

import { Translation } from "react-i18next";

function About({ isMobile }) {
  const history = useHistory();

  function validateRsvp() {
    history.push("/rsvp");
  }
  return (
    <Translation>
      {(t) => (
        <div className="about">
          {!isMobile && (
            <div>
              <h1 className="katia">Katia & Carol</h1>
            </div>
          )}
          {isMobile && (
            <div className="about__title" id="about">
              {t("About")}
            </div>
          )}{" "}
          <div className="about__introduction about__introduction--desktop">
            {t("About0")}
          </div>
          {isMobile && <div className="about__introduction">{t("About1")}</div>}
          {!isMobile && (
            <div className="about__text-wrapper-about">
              <div className="about__introduction2">{t("About2")}</div>
              <button className="btn-rsvp" onClick={() => validateRsvp()}>
                RSVP
              </button>
            </div>
          )}
          <div className="wrapper">
            {isMobile && <img src={logo} alt="Logo" className="about__img" />}
          </div>
          {isMobile && (
            <div className="about__text-wrapper-about">
              <div className="about__introduction2">{t("About2")}</div>
              <button className="btn-rsvp" onClick={() => validateRsvp()}>
                RSVP
              </button>
            </div>
          )}
        </div>
      )}
    </Translation>
  );
}

export default About;
