
import React from 'react'
import { useState, useEffect } from 'react';
import './Header.scss'
import { Translation } from "react-i18next";





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
  
 
  
  return (
    <Translation>{t=>

        <div>

          {/* <header classname="kc-header"  className={colorChange ? 'colorchange' : 'color'}  >  */}
          <h1 className="katia">Katia & Carol</h1>
          <ul className='nav-wrapper'>    
              <li className='nav-item'><a href="#schedule">{t('Schedule')}</a></li> 

              <li className='nav-item'><a href="#info">{t('Information')}</a></li>
              <li className='nav-item'><a href="#rsvp">{t('RSVP')}</a></li>
          </ul>
        </div>
    }</Translation>

  );
}

export default Header;