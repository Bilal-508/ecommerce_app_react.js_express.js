import React from "react";
import "./Hero.css";
import heroImg from "../../images/img2.png";

const Hero = () => {
  return (
    <div className="hero_container">
      <img src={heroImg} alt="hero" className="hero_img" />
    </div>
  );
};

export default Hero;
