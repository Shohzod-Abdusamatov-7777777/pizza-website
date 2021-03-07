import React from "react";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterLogo,
  SocialMedia,
  SocialLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo to="/home">Pizza</FooterLogo>
      <SocialMedia>
        <SocialLink to="/">
          <FaYoutube />
        </SocialLink>
        <SocialLink to="/">
          <FaTelegram style={{ color: "blue" }} />
        </SocialLink>
        <SocialLink to="/">
          <FaInstagram style={{ color: "yellow" }} />
        </SocialLink>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
