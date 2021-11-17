
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/login/Login'
import Pages from './components/pages/Pages'
import Rsvp from './components/rsvp/Rsvp';
import Thankyou from './components/thank-you/Thankyou';

import { Translation, useTranslation } from "react-i18next";
import ChangeLang from "./components/changeLang/ChangLang";

import './App.scss';


import i18n from "i18next";


export default class App extends React.Component {
  state = {
    lang: "en",
    colorChange: false,
    translateGone: false
  };
  // const [colorChange, setColorchange] = useState(false);

   changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       this.setState({colorChange : true});
     }
     else{
      this.setState({colorChange : false});
     }
  };

  removeTranslation = () =>{
    if(window.scrollY >= 80){
      this.setState({translateGone : true});
    }
    else{
     this.setState({translateGone : false});
    }
 };

  componentDidMount() {
      this.changeNavbarColor()
      this.removeTranslation()
  window.addEventListener('scroll', this.changeNavbarColor);  
  window.addEventListener('scroll', this.removeTranslation);  

  }
  // useEffect(() => {
  // changeNavbarColor()
  // window.addEventListener('scroll', changeNavbarColor);  
  
  // });
  
 
 
  langChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      localStorage.setItem("lang", this.state.lang);
      const lang = localStorage.getItem("lang");
      i18n.changeLanguage(lang);
    });
  };

  render() {
    const { t } = this.props;


    console.log('eeeeeeeeeeeee', t )
    const { lang } = this.state;
    console.log('lang', this.langChange)

    return (
      <>

        <div className='translation-wrapper'>
          <select
            className={`selectBox ${this.state.translateGone ? 'noselectBox' : 'selectBox'}`}
            onChange={this.langChange}
            name="lang"
            value={lang}
          >
            <option className="optionsMenu" value="en">
              English
            </option>
            <option className="optionsMenu" value="fr">
              Français
            </option>
            <option className="optionsMenu" value="ro">
              Română
            </option>
          </select>
        </div>
        <Router>
          <Switch>

          {/* <Translation>{t =>  <Login t={t} path="/login"/>}</Translation> */}

            <Route component={Login} t={t} path="/login"/> 
            
          </Switch>
          <Switch>
          {/* <Translation>{t =>  <Pages  component={Pages} t={t} path="/pages" />}</Translation> */}

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




