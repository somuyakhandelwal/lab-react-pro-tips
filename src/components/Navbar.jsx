import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/" className="navbar-logo">Kalvium <span className="heart">❤️</span></Link>
    </div>
    <div className="navbar-menu">
      <ul className="navbar-nav">
        <NavItem to="/registrationForm">Registration Form</NavItem>
        <NavItem to="/about" className="nav-link-about">About</NavItem>
      </ul>
    </div>
  </nav>
);
const NavItem = ({ to, className, children }) => (
  <li className="nav-item">
    <Link to={to} className={`nav-link ${className || ""}`}>{children}</Link>
  </li>
);

export default Navbar;