import logo from "../../images/logo.png";
import React from "react";
import { Link } from "react-router-dom";
import btn_icon from "../../images/icon__COLOR_icon-main.svg";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { user, isLoggedIn } = useSelector(state => state.auth);
  return (
    <nav className="nav">
      <ul className="nav__bar">
        <li className="nav__item">
      <Link to="/" className="nav__logo">
        <img className="nav__logo-main" src={logo} alt="header-logo" />
      </Link>
      </li>
      <li className="nav__item">
          <h1 className="header__title">Yelp bootcamp</h1>
        </li>
        {
          isLoggedIn
          && (
            <li className="nav__item nav__item_login">
          <Link to="/profile">
          <button className="nav__btn">
            { user?.name }
            <div className="nav__icon-wrapper">
              <img className="nav__btn-icon" src={btn_icon} alt="icon-login" />
            </div>
          </button>
          </Link>
        </li>
          )
        }
      </ul>
    </nav>
  );
};

export default Navigation;
