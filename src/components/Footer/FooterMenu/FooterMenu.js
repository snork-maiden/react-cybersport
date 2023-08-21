/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./FooterMenu.css";

const FooterMenu = ({ title, menuItems }) => {
  return (
    <div className="page-footer__menu footer-menu">
      <h3 className="footer-menu__title">{title}</h3>
      <ul className="footer-menu__list">
        {menuItems.map((item, index) => (
          <li key={index} className="footer-menu__item">
            <a href={item.link} className="footer-menu__link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
