import React from "react";
import "./About.scss";
import logo from "../../photos/parisbr-min.jpg";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";

import { Translation } from "react-i18next";
import TypewriterComponent from "typewriter-effect";

function About() {
  const history = useHistory();
  const isMobile = useMediaQuery("only screen and (max-width: 992px)");

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
