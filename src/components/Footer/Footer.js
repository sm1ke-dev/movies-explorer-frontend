import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__title">
        Учебный проект Яндекс.Практикум x BeatFilm.
      </h4>
      <div className="footer__container">
        <p className="footer__year">© 2020</p>
        <a className="footer__link" href="#">
          Яндекс.Практикум
        </a>
        <a className="footer__link" href="#">
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
