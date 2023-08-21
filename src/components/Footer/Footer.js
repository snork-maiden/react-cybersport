/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";
import FooterMenu from "./FooterMenu/FooterMenu";

const Footer = () => {
  const mainMenuItems = [
    { label: 'About', link: '#' },
    { label: 'Blog', link: '#' },
    { label: 'Shop', link: '#' },
    { label: 'Contact Us', link: '#' },
  ];

  const secondaryMenuItems = [
    { label: 'Styleguide', link: '#' },
    { label: 'Changelog', link: '#' },
    { label: 'Licenses', link: '#' },
    { label: 'Team', link: '#' },
  ];

  return (
    <footer className="page-footer">

        <FooterMenu title="Menu items" menuItems={mainMenuItems} />
        <FooterMenu title="Other Pages" menuItems={secondaryMenuItems} />
        <div className="copyright">
          <Logo />
          <p className="copyright__text">
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
            quam ac sed turpis volutpat. Cursus sed massa non.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
