import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import accountIcon from "../../images/account-icon.svg";
import burgerIcon from "../../images/burger-icon.svg";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Лого" className="header__logo" />
      {!props.loggedIn ? (
        <div>
          <a href="#" className="header__link">
            Регистрация
          </a>
          <a href="#" className="header__link">
            Войти
          </a>
        </div>
      ) : (
        <>
          <div className="header__nav-container">
            <a
              className={`header__nav ${
                props.page === "movies" ? "header__nav_selected" : ""
              }`}
              href="#"
            >
              Фильмы
            </a>
            <a
              className={`header__nav ${
                props.page === "saved" ? "header__nav_selected" : ""
              }`}
              href="#"
            >
              Сохраненные фильмы
            </a>
          </div>
          <div className="header__account-container">
            <a className="header__nav header__account" href="#">
              Аккаунт
            </a>
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
          ></div>
        </>
      )}
    </header>
  );
}

export default Header;
