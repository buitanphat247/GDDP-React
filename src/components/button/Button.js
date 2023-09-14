import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ children, className, isNavLink = false, url }) => {
  if (isNavLink === true) {
    return (
      <NavLink to={url} className={className}>
        {children}
      </NavLink>
    );
  } else {
    return <button className={className}>{children}</button>;
  }
};

export default Button;
