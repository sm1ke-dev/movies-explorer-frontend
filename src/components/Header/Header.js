import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Лого" className="header__logo" />
      <div>
        <a href="#" className="header__link">
          Регистрация
        </a>
        <a href="#" className="header__link">
          Войти
        </a>
      </div>
    </header>
  );
}

export default Header;
