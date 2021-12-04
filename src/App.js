import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login/Login";
import Pages from "./components/pages/Pages";
import Rsvp from "./components/rsvp/Rsvp";
import Thankyou from "./components/thank-you/Thankyou";

import "./App.scss";

export default class App extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <>
        <Router>
          <Switch>
            <Route component={Login} t={t} path="/login" />
          </Switch>
          <Switch>
            <Route component={Pages} path="/pages" />
          </Switch>
          <Switch>
            <Route component={Rsvp} path="/rsvp" />
          </Switch>
          <Switch>
            <Route component={Thankyou} path="/thankyou" />
          </Switch>
        </Router>
      </>
    );
  }
}
