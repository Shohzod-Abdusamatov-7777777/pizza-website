import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} id="navbar" />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greates Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
