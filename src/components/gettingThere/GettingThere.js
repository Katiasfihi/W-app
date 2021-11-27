import "./GettingThere.scss";

import logo1 from "../../photos/image2BB.jpg";
import logo2 from "../../photos/20210531_175424BBB.jpg";
import logo3 from "../../photos/city.jpg";

import { Translation } from "react-i18next";

function GettingThere() {
  return (
    <Translation>
      {(t) => (
        <div id="" className="gettingThere">
          <div className="gettingThere__section">
            <div className="gettingThere__title">{t("gettingThere")}</div>
            <div className="gettingThere__introduction">
              {t("gettingThere0")}
            </div>
            <div className="gettingThere__introduction">
              <a href="https://www.nice.aeroport.fr/en/services/car-rental">
                {t("gettingThere1")}
              </a>
            </div>

            <div className="gettingThere__introduction">
              {t("gettingThere2")}
            </div>
            <div className="gettingThere__introduction">
              {t("gettingThere3")}
            </div>

            <div className="wrapper">
              <img src={logo1} alt="Logo" className="gettingThere__img" />
            </div>
          </div>
        </div>
      )}
    </Translation>
  );
}

export default GettingThere;
