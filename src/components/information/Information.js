import React from 'react'
import './Information.scss'

import logo from '../../photos/moutain.jpg'; 



function Information() {
  return (
<div>
    <div className='test' >
        <div >
        <h3 className='title-wrapper'>Information</h3>
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

export default Information;