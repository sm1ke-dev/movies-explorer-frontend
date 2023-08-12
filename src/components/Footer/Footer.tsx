import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h4 className="footer__title">
        Учебный проект Яндекс.Практикум x BeatFilm.
      </h4>
      <div className="footer__container">
        <p className="footer__year">© 2020</p>
        <a
          className="footer__link"
          href="https://practicum.yandex.ru/"
          target="_blank"
        >
          Яндекс.Практикум
        </a>
        <a
          className="footer__link"
          href="https://github.com/sm1ke-dev"
          target="_blank"
        >
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
