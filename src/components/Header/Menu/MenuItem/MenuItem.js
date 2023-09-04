/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MenuItem.css";

const MenuItem = ({ children, url }) => {
  return (
    <li className="menu-item">
      {url !== null ? (
        <a className="menu-item__link" href={url}>
          {children}
        </a>
      ) : (
        <a className="menu-item__link">
          {children}
        </a>
      )}
    </li>
  );
};
export default MenuItem;