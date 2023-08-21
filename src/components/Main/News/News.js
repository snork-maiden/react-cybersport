/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./News.css";
import Slogan from "../Slogan/Slogan";
import Button from "../../Button/Button";

const News = () => {
  return (
    <section className="news">
      <Slogan />
      <h2 className="title news__title">Latest News & Articles</h2>

      <ul className="news__list">
        <li className="news__item news__item--headline">
          <article className="article">
            <a href="#" className="article__link">
              <img
                src="images/gamepad.png"
                alt="Gamepad in cyberpunk lights"
                className="article__img"
              />
              <time className="article__date">April 2, 2021</time>
              <h3 className="article__title">
                Esports Group teams up with the Indianapolis Colts
              </h3>
            </a>
          </article>
        </li>
        <li className="news__item">
          <article className="article">
            <a href="#" className="article__link">
              <img
                src="images/gamer.png"
                alt="Cybersportsman playing"
                className="article__img"
              />
              <time className="article__date">April 2, 2021</time>
              <h3 className="article__title">
                NAVI reveals s1mple fifth anniversary
              </h3>
            </a>
          </article>
        </li>
        <li className="news__item">
          <article className="article">
            <a href="#" className="article__link">
              <img
                src="images/new-picture.png"
                alt="Computer chair from the back"
                className="article__img"
              />
              <time className="article__date">April 2, 2021</time>

              <h3 className="article__title">A1esports Shares new picture</h3>
            </a>
          </article>
        </li>
        <li className="news__item">
          <article className="article">
            <a href="#" className="article__link">
              <img
                src="images/razer-keyboard.png"
                alt="Multicolor backlit keyboard"
                className="article__img"
              />
              <time className="article__date">April 2, 2021</time>

              <h3 className="article__title">
                T1 unveil partnership with Razer
              </h3>
            </a>
          </article>
        </li>
        <li className="news__item">

          <article className="article">
            <a href="#" className="article__link">
              <img
                src="images/headphones.png"
                alt="Computer headphones out of focus"
                className="article__img"
              />
              <time className="article__date">April 2, 2021</time>

              <h3 className="article__title">
                RX secures content partnership with
              </h3>
            </a>
          </article>
        </li>
      </ul>
      <div className="news__button-wrapper">
        <Button>
          Read More
        </Button>
      </div>
    </section>
  );
};

export default News;
