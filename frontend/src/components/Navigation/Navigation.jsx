import logo from "../../images/logo.png";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import btn_icon from "../../images/icon__COLOR_icon-main.svg";
import { useSelector } from "react-redux";
import ProtectedRoute from "../hoc/ProtectedRoute";
import Categories from "../Categories/Categories";

const Navigation = () => {
  const { user, isLoggedIn } = useSelector(state => state.auth);
  return (
    <nav className="nav">
      <ul className="nav__bar">
        <li className="nav__item">
      <NavLink to="/" className="nav__logo">
        <img className="nav__logo-main" src={logo} alt="header-logo" />
      </NavLink>
      </li>
      <li className="nav__item">
          <h1 className="header__title">Fake store</h1>
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
      {
        isLoggedIn && <Categories />
      }
    </nav>
  );
};

export default Navigation;
