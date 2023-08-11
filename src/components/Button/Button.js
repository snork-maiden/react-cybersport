/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Button.css";

const Button = ({ children, buttonType }) => {
  return (
    <a href="#" className={`button--${buttonType || 'default'}` +' button'}>
      {children}
    </a>
  );
};

export default Button;
