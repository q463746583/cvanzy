import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="content-container">
      <p className="header__title">Cvanzy</p>
      <div className="header__bar">
        <NavLink
          to="/"
          className="header__nav"
          activeClassName="is-active"
          exact={true}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="header__nav"
          activeClassName="is-active">
          about
        </NavLink>
        <NavLink
          to="/project"
          className="header__nav"
          activeClassName="is-active">
          proejct
        </NavLink>
        <NavLink
          to="/contact"
          className="header__nav"
          activeClassName="is-active">
          Contact
        </NavLink>
      </div>
    </div>
  </header>
);

export default Header;
