import React from "react";
import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <p className="not-found__link" onClick={() => navigate(-1)}>
        Назад
      </p>
    </div>
  );
}

export default PageNotFound;
