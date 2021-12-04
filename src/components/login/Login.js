import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Translation } from "react-i18next";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Navigation from "../navigation/Navigation";
import "./Login.scss";

function Login({ t }) {
  const [password, setPassword] = useState("");

  const history = useHistory();

  function validateForm() {
    if (password === "02072022") {
      history.push("/pages");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Translation>
      {(t) => (
        <div className="Login">
          <Navigation noBurger />
          <h1 className="kc-login">Katia & Carol</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="password">
              <Form.Label className="form-label">{t("Password")}</Form.Label>
              <Form.Control
                className="password-specs"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onSubmit={(e) => setPassword("02072022")}
              />
            </Form.Group>
            <Button
              className="login-btn"
              block
              size="lg"
              type="submit"
              disabled={!password}
              onClick={() => validateForm()}
            >
              {t("Login")}
            </Button>
          </Form>
        </div>
      )}
    </Translation>
  );
}
export default Login;
