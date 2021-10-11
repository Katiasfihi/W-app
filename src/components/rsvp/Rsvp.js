import React, { useState, useRef } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';

import "../rsvp/Rsvp.scss";

// import{ emailjs, init} from 'emailjs-com';
import emailjs from 'emailjs-com';
// init("user_7Sik7Z8G3mzKbYSyVPBjE");


function Rsvp() {
    const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const history = useHistory();

//   function validateForm() {
//     setInput('02072022')
//     history.push('/pages')
//   }

  function handleSubmit(event) {
    event.preventDefault();
  }

// const emailJs = () => {
//     emailJs.init("user_7Sik7Z8G3mzKbYSyVPBjE")
// }

// function handleClick() {
//     console.log("email")
//     var data = {
//       to_email:email,
//     };

//     emailjs.send("service_c2qhmbm", "template_m1qfl9g", data, "user_7Sik7Z8G3mzKbYSyVPBjE").then(
//       function (response) {
//         console.log(response.status, response.text);
//       },
//       function (err) {
//         console.log(err);
//       }
//     );
//   }


    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_c2qhmbm", "template_m1qfl9g", form.current, "user_7Sik7Z8G3mzKbYSyVPBjE")
        .then((result) => {
            console.log("result.text");
        }, (error) => {
            console.log("error.text");
        });
    };

  return (
    
  <div className="rsvp">
      <h1>Katia & Carol</h1>
      <div className="rsvp-span">We look forward to celebrate our big day with you. <br></br> Please confirm your attendance.</div>
      <Form onSubmit={handleSubmit} className="rsvp-form">
        <Form.Group size="lg" >
          <Form.Label>Name</Form.Label>
          <Form.Control className='name-specs'
            type="name"
            id="name"
            placeholder='Your Name...'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>      
        <Form.Group size="lg" >
          <Form.Label>Surname</Form.Label>
          <Form.Control className='surname-specs'
            type="surname"
            id="surname"
            placeholder='Your Surname...'
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Group>  
        <Form.Group size="lg" >
          <Form.Label>Email address</Form.Label>
          <Form.Control className='email-specs'
            type="email address"
            id="email"
            placeholder='Your Email address...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>  
        <Form.Group size="lg">
          <Form.Label>Message</Form.Label>
          <Form.Control className='message-specs'
            type="message"
            id="message"
            placeholder='   Your Message...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group> 
        <Button className='login-btn' block size="lg" type="submit" disabled={!name, !surname, !email}  onClick={sendEmail}>
          Send Response
        </Button>
      </Form>
    </div>
  );
}
export default Rsvp;
