import React from "react";
import Navbar1 from "../components/Navbar1";
import SliderView from "../components/Slider";
import FooterMenu from "../components/FooterMenu";
import Keyfeatures from "../components/Keyfeatures";
import WhyChoseAfri from "../components/WhyChoseAfri";
import History from "../components/History";
import Pathnership from "../components/Pathnership";
import Testimony from "../components/Testimony";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <>
      <Navbar1 />
      <HeroSection />
      <Keyfeatures />
      <SliderView />
      <WhyChoseAfri />
      <Testimony />
      <Pathnership />
      <History />
      <FooterMenu />
    </>
  );
};

export default Home;
