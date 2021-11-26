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
        About: "We are so delighted to finally be able to organise our wedding and to celebrate this special day with you, full of love, kindness, fun, laugh and champagne of course! After more than 6 years together, it is time to throw the party of our lifetime. We moved to London 11 years ago (Carol) and 7 years ago (Katia) and quickly crossed paths while working at the same place.",

        About2: "The event will take place the 2nd and 3rd of July 2022 in Cote d’Azur, South of France.",
        Date: "2nd of July 2022",
        text_schedule: "Two days, three venues!",
        text_schedule1: "We would like to enjoy your company until the last minute, so we are extending the party as much as possible. The programme includes a wedding ceremony in Villefranche’s 16th century Citadel, a wedding dinner and party at Atrego, and finally a wedding brunch the day after on the rooftop of AC Marriott at Farago on the roof.",
        text_schedule2: "Feel free to click on the venues to be redirected to their website.",
        meeting1: "Meeting at 4 o'clock",
        meeting2: "Meeting at 7 o'clock",
        meeting3: "Meeting at 12:30pm the day after",
        Destination:"The Destination",
        Destination0:"Also known as the French Riviera, the Côte d'Azur translates to Coast of Blue taking its name from the deep azure-blue color of the Mediterranean Sea.",
        Destination1:"After spending two summers and more than 7 weeks creating memories in this wonderful destination, getting married there was natural. ",
        Destination2:"Basking under a cabana in Cannes, setting sail from the port of Villefranche, partying in Saint Tropez or going on a walk on the boulevards of Nice are memories spent together that we will not forget.",
        Destination3:"We’re excited to spend a weekend with you in a place that is so special to us.",



        text_information1: "The French Riviera is stunning, and fills with incredible places to stay in. All the venues are next to each other, so staying in Nice, Villefranche or Cap d’ail would not make a difference. However, we recommend you to either stay in Nice or Villefranche as they are both close to everything, very diverse, energetic and beautiful.",
        text_information_nice: "Nice is an incredible and vibrant city with plenty of things to do and also close to everything. Cons… (yes there is one), the beach has rocks and not sand. ",
        text_information_nice0: "https://www.lonelyplanet.com/france/nice",
        text_information_nice1:"The nicest areas in Nice are: Le Quartier Mont Boron, le Quartier Libération, le Quartier Cimiez, le Quartier de Valrose, le quartier du Port, le Vieux-Nice, le Quartier Gairaut, le quartier Jean-Médecin.",
        text_information_nice2:"You can check accommodation on Airbnb :",
        text_information_nice3: "bit.ly/nice_airbnb",
        text_information_villefranche:"Villefranche sur mer is a stunning village overlooking the St Jean Cap Ferrat peninsula. We stayed there 5 weeks last year and we loved it :", 
        text_information_villefranche0:"https://www.lonelyplanet.com/france/villefranche-sur-mer", 
        text_information_villefranche1:"You can check accommodation on Airbnb :",
        text_information_villefranche2:"bit.ly/villefranche_airbnb", 
        text_information_hotel:"Beige, the agency helping us organising our event, got us two deals. Both hotels are very close to Atrego (especially Marriott) and Jardins de la Citadelle :", 
        text_information_hotel0:"Ibis Beaulieu sur Mer - 3 Bd Maréchal Joffre – 06310 Beaulieu-sur-Mer – France", 
        text_information_hotel1:"From the 1st of July until the 3rd, 2 nights for 2 people for the price of 219€ (tax not included)", 
        text_information_hotel2:"Riviera Marriott Hôtel Cap d’Ail - Le Port - 06 320 Cap d’Ail", 
        text_information_hotel3:"From the 1st of July until the 3rd, 2 nights for 2 people for the price of 608€ (tax not included)", 
         
        text_information3: "Villefranche-sur-Mer is a French commune, bordering Nice, located in the Alpes-Maritimes department in the Provence-Alpes-Côte d'Azur region. Its inhabitants are called the Villefranchois, as in most of the towns bearing the name of Villefranche, and read Vilafranquié in Nice.",
        text_information4: "Villefranche-sur-Mer is a French commune, bordering Nice, located in the Alpes-Maritimes department in the Provence-Alpes-Côte d'Azur region. Its inhabitants are called the Villefranchois, as in most of the towns bearing the name of Villefranche, and read Vilafranquié in Nice.",

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
        text_schedule: "Nous nous sommes rencontrés il y a 9 ans à Londres pour la première fois. Dave était dans un supermarché, dans l'allée des surgelés, essayant de comprendre ce qu'est la crème glacée végétalienne et une fille s'approche et dit : « Hé, savez-vous où trouver de la crème glacée végétalienne ?'. En tant que couple, nous sommes ensemble depuis 8 ans maintenant et nous nous marions l'année prochaine.",
        text_schedule2: "Déco élaborée par Philippe Starck et vue unique sur la mer pour un restaurant provençal au cadre design.",
        meeting1: "Rendez-vous à 16h",
        meeting2: "Rendez-vous à 19h",
        meeting3: "Rendez-vous à 12h30 le lendemain",
        text_information1: "Villefranche-sur-Mer est une commune française, limitrophe de Nice, située dans le département des Alpes-Maritimes en région Provence-Alpes-Côte d'Azur. Ses habitants sont appelés les Villefranchois, comme dans la plupart des communes portant le nom de Villefranche, et lu Vilafranquié en niçois.",
        text_information2: "Villefranche-sur-Mer est une commune française, limitrophe de Nice, située dans le département des Alpes-Maritimes en région Provence-Alpes-Côte d'Azur. Ses habitants sont appelés les Villefranchois, comme dans la plupart des communes portant le nom de Villefranche, et lu Vilafranquié en niçois.",
        text_information3: "Villefranche-sur-Mer est une commune française, limitrophe de Nice, située dans le département des Alpes-Maritimes en région Provence-Alpes-Côte d'Azur. Ses habitants sont appelés les Villefranchois, comme dans la plupart des communes portant le nom de Villefranche, et lu Vilafranquié en niçois.",
        text_information4: "Villefranche-sur-Mer est une commune française, limitrophe de Nice, située dans le département des Alpes-Maritimes en région Provence-Alpes-Côte d'Azur. Ses habitants sont appelés les Villefranchois, comme dans la plupart des communes portant le nom de Villefranche, et lu Vilafranquié en niçois."
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
        text_schedule: "Ne-am întâlnit acum 9 ani la Londra pentru prima dată. Dave era într-un supermarket, pe culoarul cu alimente congelate, încercând să-și dea seama ce este înghețata vegană și o fată se apropie și spune: „Hei, știi de unde să iei înghețată vegană?”. Ca cuplu suntem împreună de 8 ani și ne căsătorim anul viitor.",
        text_schedule2: "Decor proiectat de Philippe Starck și o vedere unică la mare pentru un restaurant provensal cu un decor de designer.",
        meeting1: "Întâlnire la ora 16:00",
        meeting2: "Întâlnire la ora 19:00",
        meeting3: "Ne întâlnim la 12:30 a doua zi",
        text_information1: "Villefranche-sur-Mer este o comună franceză, învecinată cu Nisa, situată în departamentul Alpes-Maritimes din regiunea Provence-Alpes-Côte d'Azur. Locuitorii săi sunt numiți Villefranchois, ca în majoritatea orașelor care poartă numele de Villefranche, și citesc Vilafranquié în Nisa.",
        text_information2: "Villefranche-sur-Mer este o comună franceză, învecinată cu Nisa, situată în departamentul Alpes-Maritimes din regiunea Provence-Alpes-Côte d'Azur. Locuitorii săi sunt numiți Villefranchois, ca în majoritatea orașelor care poartă numele de Villefranche, și citesc Vilafranquié în Nisa.",
        text_information3: "Villefranche-sur-Mer este o comună franceză, învecinată cu Nisa, situată în departamentul Alpes-Maritimes din regiunea Provence-Alpes-Côte d'Azur. Locuitorii săi sunt numiți Villefranchois, ca în majoritatea orașelor care poartă numele de Villefranche, și citesc Vilafranquié în Nisa.",
        text_information4: "Villefranche-sur-Mer este o comună franceză, învecinată cu Nisa, situată în departamentul Alpes-Maritimes din regiunea Provence-Alpes-Côte d'Azur. Locuitorii săi sunt numiți Villefranchois, ca în majoritatea orașelor care poartă numele de Villefranche, și citesc Vilafranquié în Nisa."

      }
    },
  },
  keySeparator: false,
  interpolation: { escapeValue: false }
});

export default i18n;
