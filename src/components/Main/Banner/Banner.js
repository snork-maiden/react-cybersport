/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Banner.css";
import Slogan from "../Slogan/Slogan";
import Button from "../../Button/Button";

const Banner = () => {
  return (
    <section className="banner">
        <Slogan className="slogan-banner"/>
      <div className="title banner__title">
        Unleash the Next&nbsp;
        <span className="banner__title-accent">Generation</span> of Gaming
      </div>
      <a href="#" className="banner__lifestream-image">
        <img src="/images/banner.png" alt="Guy in green ask you to join our stream" />
      </a>
      <p className="banner__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec
        donec in morbi pulvinar. Enim non pulvinar neque.
      </p>
      <div className="banner__buttons">
        <Button>
          Explore More
        </Button>
        <Button buttonType='no-bg'>
        View our team
        </Button>
      </div>
    </section>
  );
};

export default Banner;
