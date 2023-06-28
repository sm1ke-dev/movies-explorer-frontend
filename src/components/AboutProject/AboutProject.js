import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="about-project">
      <h2 className="about-project__title" id="more">
        О проекте
      </h2>
      <span className="about-project__line"></span>
      <div className="about-project__info">
        <div className="about-project__column">
          <p className="about-project__name">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <p className="about-project__name">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__grid">
        <p className="about-project__weeks">1 неделя</p>
        <p className="about-project__weeks">4 недели</p>
        <p className="about-project__subtext">Back-end</p>
        <p className="about-project__subtext">Front-end</p>
      </div>
    </div>
  );
}

export default AboutProject;
