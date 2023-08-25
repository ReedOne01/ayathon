import React from "react";
import Navbar from "../components/Navbar";
import SliderView from "../components/Slider";
import Keyfeatures from "../components/Keyfeatures";
import WhyChoseAfri from "../components/WhyChoseAfri";
import History from "../components/History";
import Pathnership from "../components/Pathnership";
import Testimony from "../components/Testimony";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Keyfeatures />
      <SliderView />
      <WhyChoseAfri />
      <Testimony />
      <Pathnership />
      <History />
    </>
  );
};

export default Home;
