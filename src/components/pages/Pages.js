import React from "react";

import Header from "../header/Header";
import About from "../about/About";
import Information from "../information/Information";
import Destination from "../destination/Destination";
import Schedule from "../schedule/Schedule";
import Footer from "../footer/Footer";
import GettingThere from "../gettingThere/GettingThere";
import Parking from "../parking/Parking";
import Navigation from "../navigation/Navigation";

function Pages() {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Schedule />
      <Destination />
      <Information />
      <GettingThere />
      <Parking />
      <Footer />
    </div>
  );
}

export default Pages;
