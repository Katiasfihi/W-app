import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const language = localStorage.getItem("language") ? localStorage.getItem("language") : 'en';
i18n.use(initReactI18next).init({
  lng: language,
  resources: {
    en: {
      translation: {
        Password: "Password :",
        Login: "Login",
        Schedule: "Schedule",
        Information: "Information",
        Rsvp: "Rsvp",
        Accommodation: "Accommodation",
        About: "About",
        About0:
          "We are so delighted to finally be able to organise our wedding and to celebrate this special day with you, full of love, kindness, laugh and champagne of course!",
        About1:
          "We fell in love in London more than 6 years ago, and it is now time to throw the party of our lifetime in the beautiful French Riveira.",
        About2:
          "The event will take place the 2nd and 3rd of July 2022 in Cote d’Azur, South of France.",
        Date: "2nd of July 2022",
        text_schedule: "Two days, three venues!",
        text_schedule0:
          "We live so far away from a lot of you and don’t get to see you nearly as much as we wish we could, so we’d love to spend the whole weekend celebrating with you.",
        text_schedule1:
          "The programme includes a wedding ceremony in Villefranche’s 16th century Citadel, a wedding dinner and party at Atrego, and finally a wedding brunch the day after on the rooftop of AC Marriott at Farago on the roof.",
        text_schedule2:
          "Feel free to click on the venues to be redirected to their website.",
        meeting1: "Meeting at 3:30 in the afternoon",
        meeting2: "Meeting at 7 o'clock",
        meeting3: "Meeting at 12:30pm the day after",
        Destination: "The Destination",
        Destination0:
          "Also known as the French Riviera, the Côte d'Azur translates to Coast of Blue taking its name from the deep azure-blue color of the Mediterranean Sea.",
        Destination1:
          "After spending two summers and more than 7 weeks creating memories in this wonderful destination, getting married there was natural. ",
        Destination2:
          "Basking under a cabana in Cannes, setting sail from the port of Villefranche, partying in Saint Tropez or going on a walk on the boulevards of Nice are memories spent together that we will not forget.",
        Destination3:
          "We’re excited to spend a weekend with you in a place that is so special to us.",
        text_information1:
          "The French Riviera is stunning, and fills with incredible places to stay in. All the venues are next to each other, so staying in Nice, Villefranche or Cap d’ail would not make a difference. However, we recommend you to either stay in Nice or Villefranche as they are both close to everything, very diverse, energetic and beautiful.",
        text_information_nice:
          "Nice is an incredible and vibrant city with plenty of things to do and also close to everything. Cons… (yes there is one), the beach has rocks and not sand. ",
        text_information_nice0: "If you want to know more about Nice",
        text_information_nice1:
          "The nicest areas in Nice are: Le Quartier Mont Boron, le Quartier Libération, le Quartier Cimiez, le Quartier de Valrose, le quartier du Port, le Vieux-Nice, le Quartier Gairaut, le quartier Jean-Médecin.",
        text_information_nice2: "You can check accommodation on Airbnb :",
        text_information_nice3: "Accomodation with Airbnb at Nice",
        text_information_nice4: "Places to have fun that we recommend :",
        text_information_nice5: "La Plage de l’Hôtel Amour",
        text_information_nice6: "Le Plongeoir",
        text_information_nice7: "Bclub Rooftop",
        text_information_villefranche:
          "Villefranche sur mer is a stunning village overlooking the St Jean Cap Ferrat peninsula. We stayed there 5 weeks last year and we loved it :",
        text_information_villefranche0:
          "If you want to know more about Villefranche-sur-mer",
        text_information_villefranche1:
          "You can check accommodation on Airbnb :",
        text_information_villefranche2:
          "Accomodation with Airbnb at Villefranche",
        text_information_villefranche3:
        "Places to have fun that we recommend :",
        text_information_villefranche4:
        "Achill's",
        text_information_villefranche5:
        "Baia Bella (à Beaulieu-sur-mer)",
        text_information_hotel:
          "Beige, the agency helping us organising our event, got us preferred rates available the weekend of our wedding.",

        text_information_hotel_0_title: "Ibis Beaulieu sur Mer",
        text_information_hotel_0_address:
          "3 Bd Maréchal Joffre – 06310 Beaulieu-sur-Mer – France",

        text_information_hotel_0_deal_ibis:
          "From the 1st of July until the 3rd, 2 nights for 2 people for the price of 219€",
        text_information_hotel_1_deal_ibis:
          "From the 1st of July until the 4th, 3 nights for 2 people for the price of 371€, (336,50€ for 1 person)",
        text_information_hotel_2_deal_ibis:
         "From the 1st of July until the 5th, 4 nights for 2 people for the price of 498€, (452€ for 1 person)",
        text_information_hotel_deal_ibis:"The 3 deals include breakfast and tax. If you would like to book, you can send an email to h8234@accor.com and mention Mariage de Katia et Carol in the subject. These rates are available until the 1st of May.",
        text_information_hotel_1_title: "Riviera Marriott Hôtel Cap d’Ail",
        text_information_hotel_1_address: "Le Port - 06 320 Cap d’Ail",
        text_information_hotel_1_address_tip:
          "(2 min walk distance from A'trego)",
        text_information_hotel_1_deal:
          "'Chambre vue montagne', 1st of July for 2 people : 264€, for 1 person: 249€",
        text_information_hotel_2_deal:
          "'Chambre vue montagne', 2nd of July for 2 people : 264€, for 1 person: 249€",
        text_information_hotel_3_deal:
        "The deals include breakfast. If you would like to book, you can click on the following link : ",
        text_information_hotel_4_deal: "These rates are available until the 1st of May.",
        link_marriott: "Book your group rate for Mariage Katia & Carol",
        gettingThere: "Getting there",
        gettingThere0:
          "Nice Côte d'Azur Airport is the closest airport. We suggest renting a car once you arrive, so you have the chance to explore. Also all the venues are next to each other but a car would be needed to commute from the wedding ceremony (Villefranche) to the restaurant (Cap d’Ail). ",
        gettingThere1: "Car rental at Nice airport",
        gettingThere2:
          "If you don’t have the possibility to rent a car, let us know so we can plan ahead. We are considering renting sa shuttle",
        gettingThere3: "If you come by train you can stop at Gare Nice-Ville.",
        parking: "Parking",
        parking0:
          "For the ceremony at Jardins de la Citadelle, you can park the car at Parking Wilson. It’s really close (5minutes), but the parking is down the hill, so a helpful tip here, would be to leave your beautiful partner at the entrance of the fortress before parking the car.",
        parking1:
          "Valet parking will wait for you and look after your car at Atrego for free. No need to find a parking spot.",
        parking2:
          "Regarding the wedding brunch at Farago on the roof, you can park at Parking Beach Regency (300m). It’s also quite easy to parc on rue de France.",
        footer:
          "May this celebration of love and friendship: our marriage, be full of laughter, our every day in paradise.",
        footer1: "Proudly powered by Katia (and Carol)",
        Nice: "Nice",
        Villefranche: "Villefranche-sur-Mer",
        hotel: "Hotel deals",
        rsvp_title: "We look forward to celebrate our big day with you.",
        rsvp_title_2: "Please confirm your attendance.",
        rsvp_first_name: "First name",
        rsvp_last_name: "Last name",
        rsvp_email: "Email",
        rsvp_confirmation: "Please tell us if you can make it to the event",
        rsvp_confirmation_yes: "Yes, I will attend",
        rsvp_confirmation_nope: " No, I will not attend",
        rsvp_car:
          "Please tell us if you will have access to a car this weekend",
        rsvp_car_yes: "Yes, I will have access to a car",
        rsvp_car_nope: "No, I will not have access to a car",
        rsvp_message: "Message:",
        rsvp_message_placeholder: "In case you want to tell us something",
        rsvp_submit: "Submit",
        rsvp_error_name: "Please tell us your name",
        rsvp_error_surname: "Please tell us your surname",
        rsvp_error_car:
          "Please tell us if you will have access to a car this weekend",
        rsvp_error_attendance: "Please tell us if you can make it to the event",
        rsvp_error_name_placeholder: "Enter your first name",
        rsvp_error_surname_placeholder: "Enter your last name",
        rsvp_error_email_placeholder: "Enter your email",
        mess: "Thank you for your message"
      },
    },
    fr: {
      translation: {
        Password: "Password :",
        Login: "Login",
        Schedule: "Programme",
        Information: "Information",
        Rsvp: "Rsvp",
        Accommodation: "Logement",
        About: "À propos",
        About0:
          "Nous avons la joie de vous convier à notre mariage. Émotions, rire, partage et surtout champagne seront au rendez-vous!",
        About1:
          "Nous nous sommes rencontrés à Londres, il y a maintenant 6 ans et nous sommes très heureux de pouvoir célébrer ce jour si spécial avec vous.",
        About2:
          "L'événement aura lieu les 2 et 3 juillet 2022 sur la French Riviera.",
        Date: "2 Juillet 2022",
        text_schedule: "Deux jours, trois lieux !",
        text_schedule0:
          "Vivant à Londres, nous n’avons pas la chance de vous voir autant que nous le souhaitons. Nous sommes donc ravis de pouvoir partager ce week-end avec vous tous.",
        text_schedule1:
          "Vous êtes conviés à notre cérémonie de mariage qui se déroulera dans la Citadelle du XVIe siècle de Villefranche, suivi d’un cocktail et d’un dîner à l’Atrego. Le lendemain, nous aurons la joie de nous retrouver autour d’un brunch sur le toit de l'AC Marriott à Farago on the roof.",
        text_schedule2:
          "N'hésitez pas à cliquer sur les lieux pour être redirigé vers leur site internet.",
        meeting1: "Rendez-vous à 15h30",
        meeting2: "Rendez-vous à 19h00",
        meeting3: "Rendez-vous à 12h30 le 3 Juillet",
        Destination: "Destination",
        Destination0:
          "La Côte d'Azur tire son nom de la profonde couleur bleu azur de la mer Méditerranée. ",
        Destination1:
          "Après avoir passé 2 étés et plus de 7 semaines à créer des souvenirs dans cette merveilleuse destination, nous unir dans cette région était une évidence.",
        Destination2:
          "Se prélasser sous le soleil de Cannes, embarquer depuis le port de Villefranche, faire la fête à Saint Tropez ou se promener sur les boulevards de Nice sont des souvenirs passés ensemble que nous n'oublierons pas.",
        Destination3:
          "Nous sommes plus que ravis de passer un week-end avec vous dans un endroit qui nous est si spécial.",
        text_information1:
          "Nos différents lieux de réception sont proches les uns des autres, il vous est donc possible de vous loger à Nice, Villefranche, Beaulieu ou encore Cap d’Ail. Cependant nous vous recommendons Nice et Villefrance (si vous souhaitez rester un peu plus longtemps) pour leur accès faciles aux commerces, leurs activités et restaurants.",
        text_information_nice:
          "Nice est une ville dynamique avec beaucoup de choses à faire et aussi proche de tout. Seul inconvénient, la plage est recouverte de galets et non de sable.",
        text_information_nice0: "En savoir plus sur Nice",
        text_information_nice1:
          "Les plus beaux quartiers de Nice sont : Le Quartier Mont Boron, le Quartier Libération, le Quartier Cimiez, le Quartier de Valrose, le quartier du Port, le Vieux-Nice, le Quartier Gairaut et le quartier Jean-Médecin.",
        text_information_nice2: "Vous pouvez consulter les logements sur Airbnb : ",
        text_information_nice3: "Logement sur Airbnb à Nice",
        text_information_nice4: "Les lieux pour s'amuser et se relaxer que nous recommendons:",
        text_information_nice5: "La Plage de l’Hôtel Amour",
        text_information_nice6: "Le Plongeoir",
        text_information_nice7: "Bclub Rooftop",



        text_information_villefranche:
          "Villefranche sur mer est un magnifique village surplombant la presqu'île de St Jean Cap Ferrat. Nous y avons séjourné 5 semaines l'année dernière et nous avons adoré : ",
        text_information_villefranche0:
          "En savoir plus sur Villefranche-sur-mer",
        text_information_villefranche1:
          "Vous pouvez consulter les logements sur Airbnb :",
        text_information_villefranche2:
          "Logement sur Airbnb à Villefranche",
          text_information_villefranche3:
          "Les lieux pour s'amuser et se relaxer que nous recommendons:",
          text_information_villefranche4:
          "Achill's",
          text_information_villefranche5:
          "Baia Bella (à Beaulieu-sur-mer)",
        text_information_hotel:
          "Beige, l'agence nous aidant à organiser notre événement, nous a fait bénéficier de tarifs préférentiels disponibles le week-end de notre mariage.",

        text_information_hotel_0_title: "Ibis, Beaulieu sur Mer",
        text_information_hotel_0_address:
          "3 Bd Maréchal Joffre – 06310 Beaulieu-sur-Mer – France",

        text_information_hotel_0_deal_ibis:
          "Du 1er juillet au 3 juillet, 2 nuits pour 2 personnes au prix de 219€ ",
        text_information_hotel_1_deal_ibis:
          "Du 1er juillet au 4 juillet, 3 nuits pour 2 personnes au prix de 371€, (336,50€ pour 1 personne)",
        text_information_hotel_2_deal_ibis:
         "Du 1er juillet au 5 juillet, 4 nuits pour 2 personnes au prix de 498€, (452€ pour 1 personne)",
        text_information_hotel_deal_ibis:
        "Les 3 offres incluent le petit-déjeuner et les taxes de séjour. Si vous souhaitez booker, vous pouvez envoyer un e-mail à h8234@accor.com et mentionner ‘Mariage de Katia et Carol' dans l’objet. Ces tarifs sont valables jusqu’au 1er Mai.",
        text_information_hotel_1_title: "Riviera Marriott Hôtel, Cap d’Ail",
        text_information_hotel_1_address: "Le Port - 06 320 Cap d’Ail",
        text_information_hotel_1_address_tip:
          "(à 2 min à pied de l'A'trego)",
        text_information_hotel_1_deal:
          "'Chambre vue montagne', 1er Juillet pour 2 personnes 264€, pour 1 personne: 249€",
        text_information_hotel_2_deal:
          "'Chambre vue montagne', 2 Juillet pour 2 personnes : 264€,  pour 1 personne: 249€",
        text_information_hotel_3_deal:
        "Le petit-déjeuner est inclus. Si vous souhaitez booker, vous pouvez clicker sur le lien suivant :",
        text_information_hotel_4_deal: " Ces tarifs sont valables jusqu’au 1er Mai.",
        link_marriott: "Tarifs préférentiels pour le Mariage de Katia & Carol",
        gettingThere: "Se déplacer",
        gettingThere0:
          "Nous vous recommandons de louer une voiture une fois sur place afin de profiter des paysages. Tous les lieux sont proches les uns des autres, mais une voiture serait nécessaire pour une facilité d’accès aux différents endroits.",
        gettingThere1: "Location de voiture à l'aéroport de Nice",
        gettingThere2:
          "Si vous n’êtes pas véhiculé, faites-le nous savoir afin que nous puissions nous organiser.",
        gettingThere3: "Enfin, si vous venez en train, il faudra vous arrêter à la gare de Nice-Ville.",
        parking: "Parking",
        parking0:
          "Pour la cérémonie aux Jardins de la Citadelle, vous pouvez garer la voiture au Parking Wilson. Le parking est à 5 minutes, par contre il se trouve en bas de la colline. Petit conseil : pensez à déposer votre belle à l'entrée avant de garer la voiture.",
        parking1:
          "Un service de voiturier à l'A'trego vous attendra et s'occupera de votre véhicule.",
        parking2:
          "Concernant le brunch à Farago on the roof, vous pouvez vous garer au Parking Beach Regency (300m). Il est également assez facile de se garer rue de France. ",
        footer:
          "Que cette célébration de l'amour et de l'amitié : notre mariage, soit pleine de rires, notre quotidien au paradis.",
        footer1: "Proudly powered by Katia (and Carol)",
        Nice: "Nice",
        Villefranche: "Villefranche-sur-Mer",
        hotel: "Offres hôtels",
        rsvp_title: "Nous avons hate de célébrer cette journée avec vous.",
        rsvp_title_2: "Merci de nous confirmer votre venue.",
        rsvp_first_name: "Prénom",
        rsvp_last_name: "Nom",
        rsvp_email: "Adresse e-mail",
        rsvp_confirmation: "Merci de nous confirmer votre venue.",
        rsvp_confirmation_yes: "Oui, je serais présent",
        rsvp_confirmation_nope: "Non, je ne serais pas présent",
        rsvp_car:
          "Disposerez-vous d'un véhicule ?",
        rsvp_car_yes: "Oui, je serais véhiculé(e)",
        rsvp_car_nope: "Non, je ne serais pas véhiculé(e)",
        rsvp_message: "Message:",
        rsvp_message_placeholder: "Un petit message ?",
        rsvp_submit: "Envoyer",
        rsvp_error_name: "N'oubliez pas votre prénom",
        rsvp_error_surname: "N'oubliez pas votre nom",
        rsvp_error_car:
          "Pas si vite... la question a été oubliée.",
        rsvp_error_attendance: "Pas si vite... la question a été oubliée.",
        rsvp_error_name_placeholder: "Votre prénom",
        rsvp_error_surname_placeholder: "Votre nom",
        rsvp_error_email_placeholder: "Votre adresse e-mail",
        mess: "Merci beaucoup"

      },
    },
    ro: {
      translation: {
        Password: "Password :",
        Login: "Login",
        Schedule: "Program",
        Information: "Information",
        Rsvp: "Rsvp",
        Accommodation: "Cazare",
        About: "Eveniment",
        About0:
          "Suntem atât de încântați să putem în sfârșit să ne organizăm nunta și să sărbătorim această zi specială alături de voi, plină de dragoste, voie bună, râs și șampanie bineînțeles!",
        About1:
          "Ne-am îndrăgostit la Londra în urmă cu mai bine de 6 ani, iar acum este timpul să organizăm petrecerea vieții noastre în frumoasa Riveira franceză.",
        About2:
          "Evenimentul va avea loc pe 2 și 3 iulie 2022 în Coasta de Azur, sudul Franței.",
        Date: "2nd of July 2022",
        text_schedule: "Două zile, în trei locații!",
        text_schedule0:
          "Trăim atât de departe de mulți dintre voi și nu ajungem să vă vedem atât de mult pe cât ne-am dori, așa că ne-ar plăcea să petrecem întregul weekend sărbătorind cu voi.",
        text_schedule1:
          "Programul include o ceremonie de nuntă în Citadela din secolul al XVI-lea din Villefranche, o cină de nuntă la Atrego și, în final, un prânz de nuntă a două zi pe acoperișul AC Marriott din Nisa.",
        text_schedule2:
          "Va rog să faceți clic pe locații pentru a fi redirecționați către site-urile lor.",
        meeting1: "Meeting at 4 o'clock",
        meeting2: "Meeting at 7 o'clock",
        meeting3: "Meeting at 12:30pm the day after",
        Destination: "Destinația",
        Destination0:
          "Cunoscută și sub denumirea de Riviera Franceză, Coasta de Azur se traduce în Coasta Albastră, luând numele de la culoarea albastru-azuriu profund a Mării Mediterane.",
        Destination1:
          "După ce am petrecut două veri și mai bine de 7 săptămâni creând amintiri în această minunată destinație, decizia de a ne căsătorii  acolo a fost firescă.",
        Destination2:
          "Clipe de relaxare sub un baldachin la Cannes, plecări cu barcă din portul Villefranche, petreceri la Saint Tropez să plimbări pe bulevardele din Nisa sunt amintiri petrecute împreună pe care nu le vom uită.",
        Destination3:
          "Suntem încântați să petrecem un weekend alături de voi într-un loc atât de special pentru noi.",
        text_information1:
          "Riviera Franceză este uimitoare și este plină de locuri incredibile în care să va puteți caza . Toate locațiile sunt una lângă celalaltă, așa că șederea în Nisa, Villefranche sau Cap d’ail nu va face nici o diferență. Cu toate acestea, vă recomandăm fie în Nisa sau Villefranche, deoarece ambele sunt aproape, foarte diverse, energice și frumoase.",
        text_information_nice:
          "Nisa este un oraș incredibil și vibrant, cu o mulțime de lucruri de făcut și foarte aproape de orice. Un contra argument la cele de mai sus ar fi că plajă are stânci și nu nisip.",
        text_information_nice0: "Dacă vrei să afli mai multe despre Nisa",
        text_information_nice1:
          "Cele mai frumoase zone din Nisa sunt: ​​Le Quartier Mont Boron, le Quartier Libération, le Quartier Cimiez, le Quartier de Valrose, le quartier du Port, le Vieux-Nice, le Quartier Gairaut, le quartier Jean-Médecin.",
        text_information_nice2: "Puteți găsii cazare pe Airbnb:",
        text_information_nice3: "Cazare prin Airbnb la Nisa",
        text_information_nice4: "Places to have fun that we recommend",
        text_information_nice5: "La Plage de l’Hôtel Amour",
        text_information_nice6: "Le Plongeoir",
        text_information_nice7: "Bclub Rooftop",
        text_information_villefranche:
          "Villefranche-sur-mer este un sat uimitor cu vedere la peninsula St Jean Cap Ferrat. Am stat acolo 5 săptămâni anul trecut și ne-a plăcut:",
        text_information_villefranche0:
          "Dacă doriți să aflați mai multe despre Villefranche-sur-mer",
        text_information_villefranche1: "Puteți găsii cazare pe Airbnb:",
        text_information_villefranche2: "Cazare prin Airbnb in Villefranche",
        text_information_villefranche3:
        "Places to have fun that we recommend",
        text_information_villefranche4:
        "Achill's",
        text_information_villefranche5:
        "Baia Bella (à Beaulieu-sur-mer)",
        text_information_hotel:
          "Beige, agenția care ne ajută să organizăm evenimentul, ne-a oferit tarife preferențiale pentru weekendul nunții noastre.",

        text_information_hotel_0_title: "Ibis Beaulieu sur Mer",
        text_information_hotel_0_address:
          "3 Bd Maréchal Joffre – 06310 Beaulieu-sur-Mer – France",
          text_information_hotel_0_deal_ibis:
          "From the 1st of July until the 3rd, 2 nights for 2 people for the price of 219€",
        text_information_hotel_1_deal_ibis:
          "From the 1st of July until the 4th, 3 nights for 2 people for the price of 371€, (336,50€ for 1 person)",
        text_information_hotel_2_deal_ibis:
         "From the 1st of July until the 5th, 4 nights for 2 people for the price of 498€, (452€ for 1 person)",
        text_information_hotel_deal_ibis:"The 3 deals include breakfast and tax. If you would like to book, you can send an email to h8234@accor.com and mention Mariage de Katia et Carol in the subject. These rates are available until the 1st of May.",
        text_information_hotel_1_title: "Riviera Marriott Hôtel Cap d’Ail",
        text_information_hotel_1_address: "Le Port - 06 320 Cap d’Ail",
        text_information_hotel_1_address_tip:
          "(2 min walk distance from A'trego)",
        text_information_hotel_1_deal:
          "'Chambre vue montagne', 1st of July for 2 people : 264€, for 1 person: 249€",
        text_information_hotel_2_deal:
          "'Chambre vue montagne', 2nd of July for 2 people : 264€, for 1 person: 249€",
        text_information_hotel_3_deal:
        "The deals include breakfast. If you would like to book, you can click on the following link : ",
        text_information_hotel_4_deal: "These rates are available until the 1st of May.",
        link_marriott: "Book your group rate for Mariage Katia & Carol",
        gettingThere: "Cum ajungem",
        gettingThere0:
          "Aeroportul Nice Côte d'Azur este cel mai apropiat aeroport. Vă sugerăm să închiriați o mașină odată ce ajungeți, astfel încât să aveți șansa de a explora. De asemenea, toate locațiile sunt aproape una de cealaltă, dar ar fi nevoie de o mașină pentru a vă deplasa de la ceremonie (Villefranche) la restaurant (Cap d’Ail).",
        gettingThere1: "Închirieri auto pe aeroportul din Nisa",
        gettingThere2:
          "Dacă nu aveți posibilitatea de a închiria o mașină, anunțați-ne astfel încât să putem planifica din timp. Ne gândim să închiriem un serviciu de transfer",
        gettingThere3: "Dacă veniți cu trenul puteți opri la Gare Nice-Ville.",
        parking: "Parcare",
        parking0:
          "Pentru ceremonia de la Citadelă, puteți parca mașina la Parking Wilson. Este foarte aproape (5 minute), dar parcarea este în partea de jos a cetății, așa că un sfat util aici ar fi să-ți lași partenerul la intrarea în cetate înainte de a parca mașina.",
        parking1:
          "Odată ajunși la restaurant, parcarea de la Atrego va avea valeți care se vor ocupă gratuit de mașini așa că nu va trebuii să va faceți griji.",
        parking2:
          "În ceea ce privește brunch-ul de nuntă la Farago on the roof, puteți parca la Parking Beach Regency (300m). De asemenea, este destul de ușor să parcați pe rue de France.",
        footer:
          "Fie ca această sărbătoare a iubirii și a prieteniei: nunta noastră, să fie plină de râs și voie bună.",
        footer1: "Proudly powered by Katia (and Carol)",
        Nice: "Nisa",
        Villefranche: "Villefranche",
        hotel: "Oferte Hoteluri",
        rsvp_title:
          "Vă așteptăm cu drag să sărbătorim ziua noastră cea mare împreună.",
        rsvp_title_2: "Vă rugăm să vă confirmați prezența.",
        rsvp_first_name: "Prenumele dvs",
        rsvp_last_name: "Numele dvs. de familie",
        rsvp_email: "Email",
        rsvp_confirmation:
          "Vă rugăm să ne spuneți dacă puteți ajunge la eveniment",
        rsvp_confirmation_yes: "Da, voi participa",
        rsvp_confirmation_nope: "Nu, nu voi participa",
        rsvp_car:
          "Vă rugăm să ne spuneți dacă veți avea acces la o mașină în acest weekend",
        rsvp_car_yes: "Da, voi avea acces la o mașină",
        rsvp_car_nope: "Nu, voi avea acces la o mașină",
        rsvp_message: "Mesaj:",
        rsvp_message_placeholder:
          "În caz că vreți să ne spuneți ceva, vă rugăm să ne scrieți aici",
        rsvp_submit: "Trimite",
        rsvp_error_name: "Vă rugăm să ne spuneți prenumele dvs",
        rsvp_error_surname: "Vă rugăm să ne spuneți numele dvs. de familie",
        rsvp_error_car:
          "Vă rugăm să ne spuneți dacă veți avea acces la o mașină în acest weekend",
        rsvp_error_attendance:
          "Vă rugăm să ne spuneți dacă puteți ajunge la eveniment",
        rsvp_error_name_placeholder: "Introduceți prenumele dvs",
        rsvp_error_surname_placeholder: "Introduceți numele dvs. de familie",
        rsvp_error_email_placeholder: "Introduceți adresa dvs. de email",
      },
    },
  },
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
