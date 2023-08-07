/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./CustomizationSection.css";
import Slogan from "../Slogan/Slogan";

const CustomizationSection = () => {
  return (
    <section className="customization">
    <Slogan />
    <h2 className="title">Customize your Own Character</h2>
    <ul className="customization__gallery gallery">
      <li className="gallery___items">
        <a href="#" className="gallery__links">
          <img src="" alt="" className="gallery__img" />
        </a>
      </li>
      <li className="gallery___items">
        <a href="#" className="gallery__links">
          <img src="" alt="" className="gallery__img" />
        </a>
      </li>
      <li className="gallery___items">
        <a href="#" className="gallery__links">
          <img src="" alt="" className="gallery__img" />
        </a>
      </li>
    </ul>
    <img src="" alt="" className="gallery__img" />
  </section>
  );
};

export default CustomizationSection;
