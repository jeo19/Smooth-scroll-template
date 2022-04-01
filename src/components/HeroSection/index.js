import React from "react";
import { HeroContainer, HeroBg, VideoBg } from "./HeroElments";
import Video from "../../videos/stars.mp4";

function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
    </HeroContainer>
  );
}

export default HeroSection;
