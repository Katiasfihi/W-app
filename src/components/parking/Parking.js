import "./Parking.scss";

import logo1 from "../../photos/image2BB.jpg";

import { Translation } from "react-i18next";

function Parking() {
  return (
    <Translation>
      {(t) => (

    <div id="" className="parking">

          <div className="parking__title">{t("parking")}</div>
          <div className="parking__introduction">{t("parking0")}</div>
          <div className="parking__introduction">{t("parking1")}</div>
          <div className="parking__introduction">{t("parking2")}</div>




          <div className="wrapper">
          <img src={logo1} alt="Logo" className="parking__img" />
          </div>
        </div>
      )}
    </Translation>
  );
}

export default Parking;