import React from 'react'
import './Schedule.scss'

import logo from '../../photos/moutain.jpg'; 



function Schedule() {
  return (
<div>
    <div className='component-wrapper' >
        <div >
        <h3 className='title-wrapper'>Schedule</h3>
        </div>

        <div className='info-wrapper'>
        <text>Ipsum lorem</text>
        </div>
    </div>

    <div >
        <img src={logo} alt="Logo" className="moutain-pic"></img>
    </div>
</div>
);
}

export default Schedule;