
import React from 'react';

import Header from './components/header/Header';
import About from './components/about/About';
import Information from './components/information/Information';
import Schedule from './components/schedule/Schedule';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Information />
      <Schedule />
      <Footer />

    </div>
  );
}

export default App;
