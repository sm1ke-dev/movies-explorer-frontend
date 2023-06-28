import React from "react";
import "./AuthHeader.css";
import logo from "../../images/logo.svg";

function AuthHeader(props) {
  return (
    <header className="auth-header">
      <img className="auth-header__logo" src={logo} />
      <h2 className="auth-header__title">
        {props.page === "signup" ? "Добро пожаловать!" : "Рады видеть!"}
      </h2>
    </header>
  );
}

export default AuthHeader;
