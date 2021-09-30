// import './App.css';
import React from 'react'
import './Header.scss'

function Header() {
  return (
    <div>
    <h1>Katia & Carol</h1>
    <ul className='nav-wrapper'>    
        <li className='nav-item'><a href="#schedule">Schedule</a></li> 
        <li className='nav-item'><a href="#info">Information</a></li>
        <li className='nav-item'><a href="#rsvp">RSVP</a></li>
    </ul>


    </div>
  );
}

export default Header;