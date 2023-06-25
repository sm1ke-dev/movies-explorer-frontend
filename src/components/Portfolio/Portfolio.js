import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__name">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link">Статичный сайт</a>
          <span className="portfolio__arrow">↗</span>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link">Адаптивный сайт</a>
          <span className="portfolio__arrow">↗</span>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link">Одностраничное приложение</a>
          <span className="portfolio__arrow">↗</span>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
