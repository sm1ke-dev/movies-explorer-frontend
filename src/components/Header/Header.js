import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import accountIcon from "../../images/account-icon.svg";
import burgerIcon from "../../images/burger-icon.svg";
import burgerClose from "../../images/burger-close.svg";
import { Link, useNavigate } from "react-router-dom";

function Header(props) {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <img
        src={logo}
        alt="Лого"
        className="header__logo"
        onClick={() => navigate("/")}
      />
      {!props.loggedIn ? (
        <div>
          <Link to="/signup" className="header__link">
            Регистрация
          </Link>
          <Link to="/signin" className="header__link">
            Войти
          </Link>
        </div>
      ) : (
        <>
          <div className="header__nav-container">
            <Link
              to="/movies"
              className={`header__nav ${
                props.page === "movies" ? "header__nav_selected" : ""
              }`}
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className={`header__nav ${
                props.page === "saved" ? "header__nav_selected" : ""
              }`}
            >
              Сохраненные фильмы
            </Link>
          </div>
          <div className="header__account-container">
            <Link to="/profile" className="header__nav header__account">
              Аккаунт
            </Link>
            <div
              className="header__icon"
              style={{
                backgroundImage: `url(${accountIcon})`,
              }}
            ></div>
          </div>
          <div
            className="header__burger"
            style={{
              backgroundImage: `url(${burgerIcon})`,
            }}
            onClick={() => setIsMenuOpened(true)}
          ></div>
        </>
      )}
      <div
        className={`mobile-menu ${isMenuOpened ? "mobile-menu_opened" : ""}`}
      >
        <div
          className={`mobile-menu__container ${
            isMenuOpened ? "mobile-menu__container_opened" : ""
          }`}
        >
          <img
            className="mobile-menu__close"
            src={burgerClose}
            onClick={() => setIsMenuOpened(false)}
          />
          <ul className="mobile-menu__list">
            <li
              className={`mobile-menu__item ${
                props.page === "main" ? "mobile-menu__item_active" : ""
              }`}
            >
              Главная
            </li>
            <li
              className={`mobile-menu__item ${
                props.page === "movies" ? "mobile-menu__item_active" : ""
              }`}
            >
              Фильмы
            </li>
            <li
              className={`mobile-menu__item ${
                props.page === "saved" ? "mobile-menu__item_active" : ""
              }`}
            >
              Сохранённые фильмы
            </li>
          </ul>
          <div className="mobile-menu__account-container">
            <p className="mobile-menu__account">Аккаунт</p>
            <div
              className="mobile-menu__icon"
              style={{
                backgroundImage: `url(${accountIcon})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
