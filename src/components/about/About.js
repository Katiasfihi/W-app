
import React from 'react'
import './About.scss'
import logo from '../../photos/pink.jpg'; 

function About() {
  return (
     <div className='about-wrapper' >

          <img src={logo} alt="Logo" className='img1' />

          <div className='text-wrapper-about'>
            <h2>Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem </h2>
            <h3>Ipsum lorem</h3>
            <button className='btn'>RSVP</button>
          </div>
    </div>
  );
}

export default About;