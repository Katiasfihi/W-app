import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "",
  resources: {
    en: {
      translation: {
        Password: "Password",
        Login: "Login"
      }
    },
    fr: {
      translation: {
        Password: "Mot de passe",
        Login: "Entrez"
      }
    },
    ro: {
      translation: {
        Password: "Parola",
        Login: "Autentificare"
      }
    },
  },
  keySeparator: false,
  interpolation: { escapeValue: false }
});

export default i18n;
