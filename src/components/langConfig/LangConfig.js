import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: {
        Password: "Password :",
        Login: "Login",
        Schedule: "Schedule",
        Information: "Information",
        Rsvp: "Rsvp",
        About: "We met 9 years ago in London for the first time. Dave was in a supermarket, in the frozen aisle trying to figure out what vegan ice cream is and a girl walks up and says: ‘Hey, do you know where ",
        Date: "2nd of July 2022",
        text_schedule: "We met 9 years ago in London for the first time. Dave was in a supermarket, in the frozen aisle trying to figure out what vegan ice cream is and a girl walks up and says: ‘Hey, do you know where to find vegan ice cream?’. As a couple we've been are together for 8 years now & we’re getting married next year."

      }
    },
    fr: {
      translation: {
        Password: "Mot de passe :",
        Login: "Entrez",
        Schedule: "Agenda",
        Information: "Information",
        Rsvp: "Rsvp",
        About: "Nous nous sommes rencontrés il y a 9 ans à Londres pour la première fois. Dave était dans un supermarché, dans l'allée des surgelés, essayant de comprendre ce qu'est la crème glacée végétalienne et une fille s'approche et dit ",
        Date: "2 Juillet 2022",
        text_schedule: "Nous nous sommes rencontrés il y a 9 ans à Londres pour la première fois. Dave était dans un supermarché, dans l'allée des surgelés, essayant de comprendre ce qu'est la crème glacée végétalienne et une fille s'approche et dit : « Hé, savez-vous où trouver de la crème glacée végétalienne ?'. En tant que couple, nous sommes ensemble depuis 8 ans maintenant et nous nous marions l'année prochaine."

      }
    },
    ro: {
      translation: {
        Password: "Parola :",
        Login: "Autentificare",
        Schedule: "Calendar",
        Information: "Information",
        Rsvp: "Rsvp",
        About: "Ne-am întâlnit acum 9 ani la Londra pentru prima dată. Dave era într-un supermarket, pe culoarul cu alimente congelate, încercând să-și dea seama ce este înghețata vegană și o fată se apropie și spune: „Hei, știi de unde să iei ",
        Date: "2 iulie 2022",
        text_schedule: "Ne-am întâlnit acum 9 ani la Londra pentru prima dată. Dave era într-un supermarket, pe culoarul cu alimente congelate, încercând să-și dea seama ce este înghețata vegană și o fată se apropie și spune: „Hei, știi de unde să iei înghețată vegană?”. Ca cuplu suntem împreună de 8 ani și ne căsătorim anul viitor."

      }
    },
  },
  keySeparator: false,
  interpolation: { escapeValue: false }
});

export default i18n;
