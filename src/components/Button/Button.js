/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Button.css";

const Button = ({ children, buttonType }) => {
  return (
    <a href="#" className={`button button--${buttonType || 'default'}`}>
      {children}
    </a>
  );
};

export default Button;
