import React from 'react'
import './Information.scss'

import logo1 from '../../photos/fun.jpeg'; 
import logo2 from '../../photos/beach2.jpg'; 
import logo3 from '../../photos/coco.jpeg'; 





function Information() {
  return (
<div>
    <div className='schedule-wrapper1' >

        <img src={logo1} alt="Logo" className='img-fun' />

        <div className='text-wrappers1'>
            <h2>Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem </h2>
            <h3>Ipsum lorem</h3>

        </div>
    </div>

<div className='schedule-wrapper2' >
    <div className='text-wrappers2'>
        <h2>Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem </h2>
        <h3>Ipsum lorem</h3>

    </div>
    <img src={logo3} alt="Logo" className='img3' />

    
</div>


    <div >
        <img src={logo2} alt="Logo" className="brighton-pic"></img>
    </div> 

</div>
);
}

export default Information;