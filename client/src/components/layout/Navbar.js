import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <Link to="/" className="navbar-brand">
          <i className={icon} /> {title}
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Quote Keeper",
  icon: "fa fa-quote-right"
};

export default Navbar;
