import React from 'react'
import './Schedule.scss'

import logo from '../../photos/fun.jpeg'; 
import logo1 from '../../photos/shades.webp'; 
import logo2 from '../../photos/beach.jpg'; 





function Schedule() {
  return (
<div>
    <div className='schedule-wrapper' >

        <img src={logo1} alt="Logo" className='img2' />

        <div className='text-wrappers'>
            <h2>Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem </h2>
            <h3>Ipsum lorem</h3>

        </div>
    </div>

<div className='schedule-wrapper' >
    <div className='text-wrappers'>
        <h2>Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem </h2>
        <h3>Ipsum lorem</h3>

    </div>
    <img src={logo2} alt="Logo" className='img3' />

    
</div>

    {/* {/* <div className='test' >

        <div className='schedule-wrapper'>
            <text>Ipsum lorem</text>
        </div>

        <img src={logo1} alt="Logo" className='img1' />
        
    </div> */}

    <div >
        <img src={logo2} alt="Logo" className="beach-pic"></img>
    </div> 

</div>
);
}

export default Schedule;