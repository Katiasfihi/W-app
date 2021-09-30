
import React from 'react';

import Header from './components/header/Header';
import About from './components/about/About';
import Information from './components/schedule/Information';
import Schedule from './components/information/Schedule';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Schedule />
      <Information />
      <Footer />

    </div>
  );
}

export default App;
