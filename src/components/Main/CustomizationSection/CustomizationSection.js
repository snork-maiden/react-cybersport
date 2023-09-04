/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./CustomizationSection.css";
import Slogan from "../Slogan/Slogan";

const CustomizationSection = () => {
  return (
    <section className="customization">
      <Slogan />
      <h2 className="title customization__title">Customize your Own Character</h2>
      <img src="images/customization-main.png" srcSet="
       images/customization-main-s.png 448w
      images/customization-main.png 597w 
       images/customization-main-l.png 1193w " alt="Computer game character in goggles" className="customization__image" />
      <p class="description customization__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
      </p>

      <ul className="customization__gallery gallery">
        <li className="gallery__item">
          <a href="#" className="gallery__link gallery__link--current">
            <img src="images/customization-gallery-1.png" alt="" className="gallery__img" />
          </a>
        </li>
        <li className="gallery__item">
          <a href="#" className="gallery__link">
            <img src="images/customization-gallery-2.png" alt="" className="gallery__img" />
          </a>
        </li>
        <li className="gallery__item">
          <a href="#" className="gallery__link">
            <img src="images/customization-gallery-3.png" alt="" className="gallery__img" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default CustomizationSection;
