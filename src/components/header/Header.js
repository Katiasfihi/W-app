
import React from 'react'
import { useState, useEffect } from 'react';
import './Header.scss'
import { Translation } from "react-i18next";

import { useHistory } from 'react-router-dom';




function Header() {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };

  useEffect(() => {
  changeNavbarColor()
  window.addEventListener('scroll', changeNavbarColor);  
  
  })

  const history = useHistory();

  function validateRsvp() {
    history.push('/rsvp')
  }
 
  
  return (
    <Translation>{t=>

        <div>

          {/* <header classname="kc-header"  className={colorChange ? 'colorchange' : 'color'}  >  */}
           {/* <h1  className={`katia ${colorChange ? 'colorchange' : 'katia'}`}>Katia & Carol</h1> */}
          <h1  className="katia">Katia & Carol</h1>
           
          <ul className='nav-wrapper'>    
              <li className='nav-item'><a href="#schedule">{t('Schedule')}</a></li> 

              <li className='nav-item'><a href="#information">{t('Information')}</a></li>
              <li className='nav-item'><a href="#rsvp" onClick={()=>  validateRsvp()}>{t('RSVP')}</a></li>
          </ul>
        </div>
    }</Translation>

  );
}

export default Header;