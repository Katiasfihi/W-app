import { Translation } from "react-i18next";

import logo1 from "../../photos/hippy2br-min.jpg";
import "./GettingThere.scss";

function GettingThere() {

  const language = localStorage.getItem("language") ? localStorage.getItem("language") : 'en';

  return (
    <Translation>
      {(t) => (
        <div className="gettingThere">
          <div className="gettingThere__section-wrapper">
            <div className="gettingThere__section">
              <div className="gettingThere__title" id="getting-there">
                {t("gettingThere")}
              </div>
              <div className="gettingThere__introduction">
                {t("gettingThere0")}
              </div>
              <div className="gettingThere__introduction">
                <a
                href={`https://www.nice.aeroport.${language}/en/services/car-rental`}
                  target="_blank"
                  rel="noreferrer"
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
        </div>
      )}
    </Translation>
  );
}

export default GettingThere;
