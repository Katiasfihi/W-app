import React from 'react'
import { useHistory } from 'react-router-dom';

import './Footer.scss'

import { Translation } from "react-i18next";

function Footer() {

  const history = useHistory();

  function validateRsvp() {
    history.push('/rsvp')
  }
  return (
    <Translation>
      {(t) => (
    <div className="footer">
      <div className="footer__wrapper-quote">{t("footer")}</div>
    <div className="footer__wrap" >
    <button className="footer__wrap-btn" onClick={() => validateRsvp()}>RSVP </button>
    </div>
      <div className="footer__wrapper-last">{t("footer1")} <br></br>Dec 2021.</div>

    </div>
     )}
     </Translation>
  );
}

export default Footer;