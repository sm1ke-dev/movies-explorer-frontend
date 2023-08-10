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
          <h3 className="about-me__name">Анатолий</h3>
          <p className="about-me__job">Фронтенд-разработчик, 23 года</p>
          <p className="about-me__info">
            В этом году я окончил инженерно-педагогический факультет РГППУ.
            Во время учебы меня привлек frontend. Мне понравился процесс вёрстки 
            сайтов, поэтому я записался на курс по веб-разработке, чтобы стать 
            специалистом. В процессе больше понравилось работать с 
            библиотекой React, поэтому делаю упор именно на неё.
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
