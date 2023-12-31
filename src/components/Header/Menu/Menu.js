/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Menu.css";
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {
  const menuItems = [
    { label: 'Home', url: null },
    { label: 'About', url: '#' },
    { label: 'Team', url: '#' },
    { label: 'Shop', url: '#' },
    { label: 'Pages', url: '#' }
  ];
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
      <ul className={`page-nav__list ${isOpen ? 'page-nav__list--open' : ''}`}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} url={item.url}>{item.label}</MenuItem>))}
      </ul>
    </nav>
  );
};

export default Menu;
