
import React from 'react'
import './About.scss'
import logo from '../../photos/20210918_154315BB.jpg'; 
import { useHistory } from 'react-router-dom';

import { Translation } from "react-i18next";



function About() {

  const history = useHistory();

  function validateRsvp() {
    history.push('/rsvp')
  }
  return (

    <Translation>{t=>
      <div className='about-wrapper' >

            <img src={logo} alt="Logo" className='img1' />

            <div className='text-wrapper-about'>
              <div className="introduction">{t('About')}</div>
              <h3 className="date">{t('Date')}</h3>
              <button className='btn-rsvp' onClick={()=>  validateRsvp()}>RSVP</button>
            </div>
      </div>
   }</Translation>
  );
}

export default About;