import { Translation } from "react-i18next";

import logo1 from "../../photos/hippy2br.jpg";
import "./GettingThere.scss";

function GettingThere() {
  return (
    <Translation>
      {(t) => (
        <div className="gettingThere">
          <div className="gettingThere__section">
            <div id="getting-there" className="gettingThere__title">
              {t("gettingThere")}
            </div>
            <div className="gettingThere__introduction">
              {t("gettingThere0")}
            </div>
            <div className="gettingThere__introduction">
              <a
                href="https://www.nice.aeroport.fr/en/services/car-rental"
                target="_blank"
              >
                {t("gettingThere1")}
              </a>
            </div>

            <div className="gettingThere__introduction">
              {t("gettingThere2")}
            </div>
            <div className="gettingThere__introduction">
              {t("gettingThere3")}
            </div>
          </div>
          <img src={logo1} alt="Logo" className="gettingThere__img" />
        </div>
      )}
    </Translation>
  );
}

export default GettingThere;
