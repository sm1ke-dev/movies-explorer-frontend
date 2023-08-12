import React from "react";
import { Link } from "react-router-dom";
import "./AuthText.css";
import { PageProp } from "../AuthHeader/AuthHeader";

const AuthText: React.FC<PageProp> = ({ page }) => {
  return (
    <p className="auth-text">
      {page === "signup"
        ? "Уже зарегистрированы? "
        : "Ещё не зарегистрированы? "}
      {page === "signup" ? (
        <Link to="/signin" className="auth-text__link">
          Войти
        </Link>
      ) : (
        <Link to="/signup" className="auth-text__link">
          Регистрация
        </Link>
      )}
    </p>
  );
};

export default AuthText;
