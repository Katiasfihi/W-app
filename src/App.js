
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import Login from './components/login/Login'
import Pages from './components/pages/Pages'
import Rsvp from './components/rsvp/Rsvp';
import Thankyou from './components/thank-you/Thankyou';

import './App.css';

function App() {
  return (
    <div>
      <Router>

          <Switch>
            <Route component={Login} path="/login"/> 
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
    </div>
  );
}

export default App;
