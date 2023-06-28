import React from "react";
import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";
import studentPic from "../../images/student.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <span className="about-me__line"></span>
      <div className="about-me__container">
        <div className="about-me__text">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__info">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href="https://github.com/sm1ke-dev"
            className="about-me__link"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div className="about-me__pic-container">
          <img className="about-me__pic" src={studentPic} alt="Фото студента" />
        </div>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
