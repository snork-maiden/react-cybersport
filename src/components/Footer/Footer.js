/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css"; 
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="copyright">
        <Logo/>
        <p className="copyright__text">
          Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
          quam ac sed turpis volutpat. Cursus sed massa non.
        </p>
      </div>
      <div className="page-footer__menu footer-menu">
        <h3 className="footer-menu__title">Menu items</h3>
        <ul className="footer-menu__list">
          <li className="footer-menu__item">
            <a href="#" className="footer-menu__link">About</a>
          </li>
          <li className="footer-menu__item">
            <a href="#" className="footer-menu__link">Blog</a>
          </li>
          <li className="footer-menu__item">
            <a href="#" className="footer-menu__link">Shop</a>
          </li>
          <li className="footer-menu__item">
            <a href="#" className="footer-menu__link">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="page-footer__menu footer-menu">
        <h3 className="footer-menu__title">Other Pages</h3>
        <ul className="footer-menu__list">
          <li className="footer-menu__item">
            <a href="#" className="footer-menu__link">Styleguide</a>
          </li>
          <li className="footer-menu__item">
            <a href="#" className="footer-menu__link">Changelog</a>
          </li>
          <li className="footer-menu__item">
            <a href="#" className="footer-menu__link">Licenses</a>
          </li>
          <li className="footer-menu__item">
            <a href="#" className="footer-menu__link">Team</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
