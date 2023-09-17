import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ children, className, isNavLink = false, url, ...props }) => {
  if (isNavLink === true) {
    return (
      <NavLink to={url} className={className} {...props}>
        {children}
      </NavLink>
    );
  } else {
    return (
      <button className={className} {...props}>
        {children}
      </button>
    );
  }
};

export default Button;
