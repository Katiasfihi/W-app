import React from "react";
import { Translation } from "react-i18next";
import { Link } from "react-router-dom";

import "./Thankyou.scss";

function Thankyou() {
  const mess = "Thank you for your message.";

  return (
    <Translation>
      {(t) => (
        <div className="rsvp">
          <Link to="/">
            <h1 className="katia">Katia & Carol</h1>
          </Link>
          <div className="message-rsvp">
            <h2 className="pop-message">{t(`${mess}`)}</h2>
          </div>
        </div>
      )}
    </Translation>
  );
}

export default Thankyou;
