import React from "react";
import "./Hero.css";
import kartik_img from "../../assets/krtk_img.JPEG";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={kartik_img} alt="" />
      <h1>
        <span>I'm Kartik Sharma,</span> frontend developer based in Noida.
      </h1>
      <p>
        I am an aspiring frontend developer from Noida, passionate about
        building user-friendly web applications.
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect with me
            </AnchorLink>
          </div>
          {/* <div className="hero-resume">My Resume</div> */}

          <div className="hero-resume">
            <a
              href="/Kartik_Resume.pdf"
              download="Kartik_Resume.pdf"
              className="hero-resume-link"
            >
              My Resume
            </a>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Hero;
