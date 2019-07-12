import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import QuoteContext from "../../context/quote/quoteContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const quoteContext = useContext(QuoteContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearQuotes } = quoteContext;

  const onLogout = () => {
    logout();
    clearQuotes();
  };

  const authLinks = (
    <Fragment>
      <li className="m-2">Hello {user && user.name}</li>
      <li className="m-2">
        <a onClick={onLogout} href="#!">
          <i className="fa fa-sign-out" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
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
    </Fragment>
  );

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <h1>
          <i className={icon} /> {title}
        </h1>
        <ul className="navbar-nav ml-auto">
          {isAuthenticated ? authLinks : guestLinks}
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
