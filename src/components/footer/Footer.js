import React from 'react'
import { useHistory } from 'react-router-dom';

import './Footer.scss'

function Footer() {

  const history = useHistory();

  function validateRsvp() {
    history.push('/rsvp')
  }
  return (
    <div className="footer">
      <text className="footer__wrapper">Ipsum lorem</text>
      <button className="footer__btn" onClick={() => validateRsvp()}>
        RSVP
      </button>
    </div>
  );
}

export default Footer;