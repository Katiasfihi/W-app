import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';

import "../login/Login.scss";


function Rsvp() {
  const [password, setPassword] = useState("");

  const history = useHistory();

  function validateForm() {
    setPassword('02072022')
    history.push('/pages')
  }

  function handleSubmit(event) {
    event.preventDefault();
  }



  return (
    
  <div className="Login">
      <h1>Katia & Carol</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control className='password-specs'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>      
        <Button className='login-btn' block size="lg" type="submit" disabled={!password} >
          Login
        </Button>
      </Form>
    </div>
  );
}
export default Rsvp;
