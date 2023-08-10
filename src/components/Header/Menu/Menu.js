/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Menu.css";
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {
  const menuItems = ['Home', 'About', 'Team', 'Shop', 'Pages']
  const [isOpen, setIsOpen] = useState(false);

  const closeMenuOnEscape = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeMenuOnEscape);
    return () => {
      window.removeEventListener('keydown', closeMenuOnEscape);
    };
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="page-nav">
      {isOpen && (
        <div className="close-burger-wrapper" onClick={() => setIsOpen(false)}></div>
      )}

      <button className="burger-button" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='40' height='40'>
          <path stroke="#fff" stroke-linecap="round" stroke-width="2" d="M4 18h16M4 12h16M4 6h16" />
        </svg>
      </button>
      {isOpen && (
        <ul className="page-nav__list">
          {menuItems.map((item, index) => (
            <MenuItem key={index}>{item}</MenuItem>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Menu;
