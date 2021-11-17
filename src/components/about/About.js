import React from "react";
import "./About.scss";
import logo from "../../photos/20210918_154315BB.jpg";
import { useHistory } from "react-router-dom";

import { Translation } from "react-i18next";

function About() {
  const history = useHistory();

  function validateRsvp() {
    history.push("/rsvp");
  }
  return (
    <Translation>
      {(t) => (
        <div className="about">
          <img src={logo} alt="Logo" className="about__img" />
          <div className="about__text-wrapper-about">
            <div className="about__introduction">{t("About")}</div>
            <h3 className="about__date">{t("Date")}</h3>
            <button className="btn-rsvp" onClick={() => validateRsvp()}>
              RSVP
            </button>
          </div>
        </div>
      )}
    </Translation>
  );
}

export default About;
