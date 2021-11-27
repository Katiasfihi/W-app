
import React from 'react'
// import { useState, useEffect } from 'react';
import './Header.scss'
import { Translation } from "react-i18next";

// import { useHistory } from 'react-router-dom';
import logo from "../../photos/icons8-menu-50.png";
import logos from "../../photos/icons8-down-arrow-50.png";
import TypewriterComponent from 'typewriter-effect';

// import logo1 from "../../photos/20210918_154315BB.jpg";



function Header() {

  // const [colorChange, setColorchange] = useState(false);
  // const changeNavbarColor = () =>{
  //    if(window.scrollY >= 80){
  //     //  setColorchange(true);
  //    }
  //    else{
  //     //  setColorchange(false);
  //    }
  // };

  // useEffect(() => {
  // changeNavbarColor()
  // window.addEventListener('scroll', changeNavbarColor);  
  
  // })

  // const history = useHistory();

  // function validateRsvp() {
  //   history.push('/rsvp')
  // }
 
  
  return (
    <Translation>
      {(t) => (
        <div>
          <div className="menu-wrapper">
            <img src={logo} alt="Logo" className="menu" />
          </div>
          <h1 className="katia">Katia & Carol</h1>
          <div className="married">
            <TypewriterComponent
              onInit={(typeWriter) => {
                typeWriter
                  .pause(2000)
                  .typeString("are getting married.")
                  // .pause(2000)
                  // .deleteAll()
                  // .typeString('we cannnot wait !!!')
                  .start();
              }}
            />
          </div>
          <div>
            {/* <img src={logo1} alt="Logo" className="about__img" /> */}
          </div>

          <div className="scroll">SCROLL FOR MORE</div>
          <div className="arrow-container">
            {" "}
            <a href="#about">
              <img src={logos} alt="Logo" className="arrow" />
            </a>
          </div>

          {/* <ul className='nav-wrapper'>    
              <li className='nav-item'><a href="#schedule">{t('Schedule')}</a></li> 
              <li className='nav-item'><a href="#information">{t('Information')}</a></li>
              <li className='nav-item'><a href="#rsvp" onClick={()=>  validateRsvp()}>{t('RSVP')}</a></li>
          </ul> */}
        </div>
      )}
    </Translation>
  );
}

export default Header;