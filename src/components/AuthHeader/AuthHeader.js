import React from "react";
import "./AuthHeader.css";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";

function AuthHeader(props) {
  const navigate = useNavigate();

  return (
    <header className="auth-header">
      <img
        className="auth-header__logo"
        src={logo}
        alt="Лого"
        onClick={() => navigate("/")}
      />
      <h2 className="auth-header__title">
        {props.page === "signup" ? "Добро пожаловать!" : "Рады видеть!"}
      </h2>
    </header>
  );
}

export default AuthHeader;
