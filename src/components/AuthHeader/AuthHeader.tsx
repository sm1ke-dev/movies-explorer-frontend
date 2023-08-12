import React from "react";
import "./AuthHeader.css";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";

export type PageProp = {
  page: string;
};

const AuthHeader: React.FC<PageProp> = ({ page }) => {
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
        {page === "signup" ? "Добро пожаловать!" : "Рады видеть!"}
      </h2>
    </header>
  );
};

export default AuthHeader;
