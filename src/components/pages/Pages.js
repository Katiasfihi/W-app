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
import { useMediaQuery } from "@react-hook/media-query";

function Pages() {
  const isMobile = useMediaQuery("only screen and (max-width: 992px)");

  return (
    <>
      <Navigation />
      {isMobile && <Header />}
      <About isMobile={isMobile} />
      <Schedule isMobile={isMobile} />
      <Destination isMobile={isMobile} />
      <Information isMobile={isMobile} />
      <GettingThere isMobile={isMobile} />
      <Parking isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </>
  );
}

export default Pages;
