import { Translation } from "react-i18next";

import logo1 from "../../photos/image2BB.jpg";

import "./Parking.scss";

function Parking() {
  return (
    <Translation>
      {(t) => (
        <div className="parking">
          <div id="parking-section" className="parking__title">
            {t("parking")}
          </div>
          <p className="parking__introduction">{t("parking0")}</p>
          <p className="parking__introduction">{t("parking1")}</p>
          <p className="parking__introduction parking__introduction--last">
            {t("parking2")}
          </p>
          <img src={logo1} alt="Logo" className="parking__img" />
        </div>
      )}
    </Translation>
  );
}

export default Parking;
