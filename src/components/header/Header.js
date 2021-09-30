// import './App.css';
import React from 'react'
import './Header.scss'

function Header() {
  return (
    <div>
    <h1>Katia & Carol</h1>
    <ul className='nav-wrapper'>    
        <li className='nav-item'>Schedule</li> 
        <li className='nav-item'>Information</li>
        <li className='nav-item'>RSVP</li>
    </ul>


    </div>
  );
}

export default Header;