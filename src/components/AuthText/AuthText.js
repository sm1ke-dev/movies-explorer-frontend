import React from "react";
import { Link } from "react-router-dom";
import "./AuthText.css";

function AuthText(props) {
  return (
    <p className="auth-text">
      {props.page === "signup"
        ? "Уже зарегистрированы? "
        : "Ещё не зарегистрированы? "}
      {props.page === "signup" ? (
        <Link to="/signin" className="auth-text__link" href="#">
          Войти
        </Link>
      ) : (
        <Link to="/signup" className="auth-text__link" href="#">
          Регистрация
        </Link>
      )}
    </p>
  );
}

export default AuthText;
