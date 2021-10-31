import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';

import "../rsvp/Rsvp.scss";

import emailjs from 'emailjs-com';
// init("user_7Sik7Z8G3mzKbYSyVPBjE");


function Rsvp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  // const [popup, setPopup] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
  }
  const history = useHistory();

    const sendEmail = (e) => {
        emailjs.sendForm(
        "service_u5nlqmi",
        "template_m1qfl9g",
        "#form-id",
        "user_7Sik7Z8G3mzKbYSyVPBjE"
      ).then(() => {
        console.log('it works')
        // setPopup("Thank you for your message." )
      history.push('/thankyou')

      })
    };

  return (
    
  <div className="rsvp">
      {/* <h1 className="kc-rsvp">Katia & Carol</h1> */}
      <div className="rsvp-span">We look forward to celebrate our big day with you. <br></br> Please confirm your attendance.</div>
      <Form className="rsvp-form" id='form-id' onSubmit={handleSubmit}>
        <Form.Group size="lg" className="form-gr-rsvp">
          <Form.Label>Name</Form.Label>
          <Form.Control className='name-specs'
            name='name'
            type="name"
            id="name"
            placeholder='Your Name...'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>      
        <Form.Group size="lg" className="form-gr-rsvp">
          <Form.Label>Surname</Form.Label>
          <Form.Control className='surname-specs'
           name='surname'
            type="surname"
            id="surname"
            placeholder='Your Surname...'
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Group>  
        <Form.Group size="lg" className="form-gr-rsvp">
          <Form.Label>Email address</Form.Label>
          <Form.Control className='email-specs'
            name='email'
            type="email address"
            id="email"
            placeholder='Your Email address...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>  
      {/* <h2 className="pop-message">{popup}</h2> */}
        <Form.Group size="lg" className="mess-form">
          <Form.Label>Message</Form.Label>
          <textarea className='message-specs'
            name='message'
            type="text"
            id="text"
            placeholder='Your Message...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group> 
        {/* <Button className='rsvp-btn' block size="lg" type="submit" disabled={!name, !surname, !email}  onClick={sendEmail}> */}
        <Button className='rsvp-btn' block size="lg" type="submit"   onClick={sendEmail}>

          Send Response
        </Button>
      </Form>
    </div>
  );
}
export default Rsvp;
