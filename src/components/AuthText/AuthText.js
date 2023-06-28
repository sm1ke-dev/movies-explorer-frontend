import React from "react";
import "./AuthText.css";

function AuthText(props) {
  return (
    <p className="auth-text">
      {props.page === "signup"
        ? "Уже зарегистрированы? "
        : "Ещё не зарегистрированы? "}
      {props.page === "signup" ? (
        <a className="auth-text__link" href="#">
          Войти
        </a>
      ) : (
        <a className="auth-text__link" href="#">
          Регистрация
        </a>
      )}
    </p>
  );
}

export default AuthText;
