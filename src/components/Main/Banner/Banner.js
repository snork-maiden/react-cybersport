/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Banner.css";
import Slogan from "../Slogan/Slogan";

const Banner = () => {
  return (
    <section className="banner">
      <Slogan />
      <div className="title">
        Unleash the Next
        <span className="banner__title-accent">Generation</span> of Gaming
      </div>
      <a href="#" className="banner__lifestream-link">
        <img src="" alt="Guy in green ask you to join our stream" />
      </a>
      <p className="banner__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec
        donec in morbi pulvinar. Enim non pulvinar neque.
      </p>
      <div className="banner__buttons">
        <a href="" className="button">
          Explore More
        </a>
        <a href="" className="button button--transparent">
          View our team
        </a>
      </div>
    </section>
  );
};

export default Banner;
