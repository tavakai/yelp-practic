import logo from "../../images/logo.png";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <nav className="nav">
        <ul className="nav__bar">
          <li className="nav__item">
            <Link to="/main" className="nav__logo">
              <img className="nav__logo-main" src={logo} alt="header-logo" />
            </Link>
          </li>
          <li className="nav__item">
            <h1 className="header__title">Yelp bootcamp</h1>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
