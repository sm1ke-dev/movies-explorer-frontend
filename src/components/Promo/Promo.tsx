import React from "react";
import "./Promo.css";
import { HashLink } from "react-router-hash-link";

import promoPic from "../../images/promo-pic.png";

const Promo: React.FC = () => {
  return (
    <section className="promo main__promo">
      <div className="promo__text-container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <HashLink to="/#more" className="promo__link">
          Узнать больше
        </HashLink>
      </div>
      <img className="promo__pic" src={promoPic} alt="Лого" />
    </section>
  );
};

export default Promo;
