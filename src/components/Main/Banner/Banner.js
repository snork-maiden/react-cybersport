/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Banner.css";
import Slogan from "../Slogan/Slogan";
import Button from "../../Button/Button";

const Banner = () => {
  return (
    <section className="banner">
      <Slogan className="slogan-banner" />
      <div className="title banner__title">
        Unleash the Next&nbsp;
        <span className="banner__title-accent">Generation</span> <br /> of Gaming
      </div>
      <a href="#" className="banner__lifestream-image">
        <img src="/images/banner-s.png" alt="Guy in green ask you to join our stream" srcSet="/images/banner-s.png / 496w
        /images/banner-s.png / 661w
        images/banner-2x.png 1321w" sizes="(min-width: 750px) 50vw, 96vw"/>
      </a>
      <p className=" banner__description description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec
        donec in morbi pulvinar. Enim non pulvinar neque.
      </p>
      <ul className="banner__contacts">
        <li className="banner__contact"><a href="facebook.com" className="banner__contact-link">Facebook</a></li>
        <li className="banner__contact"><a href="instagram.con" className="banner__contact-link">Instagram</a></li>
        <li className="banner__contact"><a href="twitch.com" className="banner__contact-link">Twitch</a></li>
      </ul>
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
