/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./News.css";
import Slogan from "../Slogan/Slogan";

const News = () => {
  return (
    <section className="news">
    <Slogan />
    <h2 className="title">Latest News & Latest News & Articles</h2>
    <a href="#" className="news__link button">
      Read More
    </a>
    <ul className="news__list">
      <li className="news__item">
        <article className="article">
          <img
            src=""
            alt="Gamepad in cyberpunk lights"
            className="article__img"
          />
          <time className="article__date">April 2, 2021</time>
          <h3 className="article__title">
            Esports Group teams up with the Indianapolis Colts
          </h3>
        </article>
      </li>
      <li className="news__item">
        <article className="article">
          <img
            src=""
            alt="Cybersportsman playing"
            className="article__img"
          />
          <time className="article__date">April 2, 2021</time>
          <h3 className="article__title">
            NAVI reveals s1mple fifth anniversary
          </h3>
        </article>
      </li>
      <li className="news__item">
        <article className="article">
          <img
            src=""
            alt="Computer chair from the back"
            className="article__img"
          />
          <time className="article__date"></time>
          <h3 className="article__title">A1esports Shares new picture</h3>
        </article>
      </li>
      <li className="news__item">
        <article className="article">
          <img
            src=""
            alt="Multicolor backlit keyboard"
            className="article__img"
          />
          <time className="article__date"></time>
          <h3 className="article__title">
            T1 unveil partnership with Razer
          </h3>
        </article>
      </li>
      <li className="news__item">
        <article className="article">
          <img
            src=""
            alt="Computer headphones out of focus"
            className="article__img"
          />
          <time className="article__date"></time>
          <h3 className="article__title">
            RX secures content partnership with
          </h3>
        </article>
      </li>
    </ul>
  </section>
  );
};

export default News;
