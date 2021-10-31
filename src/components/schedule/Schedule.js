import React from 'react'
import './Schedule.scss'

import logo from '../../photos/20210530_174347MBB.jpg'; 

import { Translation } from "react-i18next";


function Schedule() {
  return (
    <Translation>{t=>

<div>
    <div className='component-wrapper' >
        {/* <div > */}
        <h3 className='title-wrapper'>Schedule</h3>
        {/* </div> */}
            <div className='bloc-wrapper'>
            <div className='info-wrapper'>
                    <text>{t('text_schedule')}<br>
                    </br>heloooooo Ip</text>
                    </div>


                    <div className="location">
                        <div className="villefranche">
                            <div className="venue">Jardins de la Citadelle</div>
                            <div className="address">Rendez-vous à 16h <br></br><br></br>06230, Villefranche-sur-Mer, <br></br>France</div>
                        </div>
                     
                        <div className="cap">
                            <div className="venue">Atrego</div>
                            <div className="address">Rendez-vous à 19h <br></br><br></br>Port de Cap d'Ail, <br></br>06320 Cap-d'Ail,<br></br>France</div>
                        </div>
                        <div className="nice">
                            <div className="venue">Farago on the roof</div>
                            <div className="address">Rendez-vous à 12h30 le lendemain<br></br><br></br>Rooftop de l'AC Hotel by Marriott Nice, <br></br>Rue Honoré Sauvan, Entrée, 59 Prom. des Anglais, <br></br>06000 Nice,<br></br>France</div>
                        </div>
                    </div>

            </div>
    
    </div>

    <div >
        <img src={logo} alt="Logo" className="moutain-pic"></img>
    </div>
</div>
    }</Translation>

);
}

export default Schedule;