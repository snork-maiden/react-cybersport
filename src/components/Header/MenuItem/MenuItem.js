/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MenuItem.css";

const MenuItem = ({ children }) => {
  return (
    <li><a href='#'>{children}</a></li>

  );
};

export default MenuItem;
