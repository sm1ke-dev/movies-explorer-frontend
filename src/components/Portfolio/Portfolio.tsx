import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__name">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/sm1ke-dev/how-to-learn"
            target="_blank"
          >
            Статичный сайт
          </a>
          <span className="portfolio__arrow">↗</span>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://sm1ke-dev.github.io/russian-travel/"
            target="_blank"
          >
            Адаптивный сайт
          </a>
          <span className="portfolio__arrow">↗</span>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://mesto.gud.nomoredomains.rocks/"
            target="_blank"
          >
            Одностраничное приложение
          </a>
          <span className="portfolio__arrow">↗</span>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
