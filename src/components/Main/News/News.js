/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./News.css";
import Slogan from "../Slogan/Slogan";
import Button from "../../Button/Button";

const News = () => {
  return (
    <div className="news__wrapper">
      <section className="news">
        <Slogan />
        <h2 className="title news__title">Latest News & Articles</h2>

        <ul className="news__list">
          <li className="news__item news__item--headline">
            <article className="article">
              <a href="#" className="article__link">
                <img
                  src="images/gamepad.png"
                  srcSet="
                images/gamepad-0,5x.png 325w
                images/gamepad.png 649w
                images/gamepad-2x.png 1297w
                "
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
                  srcSet="
                images/gamer.png 1x
                images/gamer-2x.png 2x
                "
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
                  srcSet="
                images/new-picture.png 1x
                images/new-picture-2x.png 2x
                "
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
                  srcSet="
                images/razer-keyboard.png 1x
                images/razer-keyboard-2x.png 2x
                "
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
                  srcSet="
                images/headphones.png 1x
                images/headphones-2x.png 2x
                "
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
        <Button>
          Read More
        </Button>
      </section>
    </div>
  );
};

export default News;
