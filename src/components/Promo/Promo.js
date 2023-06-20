import React from "react";
import "./Promo.css";

import promoPic from "../../images/promo-pic.png";

function Promo() {
  return (
    <div className="promo main__promo">
      <div className="promo__text-container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a href="#" className="promo__link">
          Узнать больше
        </a>
      </div>
      <img className="promo__pic" src={promoPic} alt="Лого" />
    </div>
  );
}

export default Promo;
