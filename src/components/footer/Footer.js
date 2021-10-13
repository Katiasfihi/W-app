import React from 'react'
import { useHistory } from 'react-router-dom';

import './Footer.scss'

function Footer() {

  const history = useHistory();

  function validateRsvp() {
    history.push('/rsvp')
  }
  return (
<div>
    <div className='footer-wrapper'>
        <text>Ipsum lorem</text>
    </div>  

    <div className='button-wrapper'>
            <button className='btn2'onClick={()=>  validateRsvp()}>RSVP</button>
    </div>
</div>
);
}

export default Footer;