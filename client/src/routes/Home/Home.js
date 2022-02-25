import React from "react";

import HeroSection from "../../components/pages/HomePage/HeroSection";
import ServiceSection from "../../components/pages/HomePage/ServiceSection";
import ContactSection from "../../components/pages/HomePage/ContactSection";
// Comment
export const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ServiceSection />
      <ContactSection />
    </React.Fragment>
  );
};
