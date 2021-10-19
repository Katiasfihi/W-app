
import React from 'react';

import Header from  '../header/Header';
import About from '../about/About';
import Information from '../schedule/Information';
import Schedule from '../information/Schedule';
import Footer from '../footer/Footer';



function Pages() {
  return (
    <div>
        <Header/> 
        <About/> 
        <Schedule/> 
        <Information/> 
        <Footer/> 
    </div>
  );
}

export default Pages;