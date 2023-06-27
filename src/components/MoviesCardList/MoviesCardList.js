import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  return (
    <section className="cards">
      <ul className="cards__list">
        <MoviesCard saved={props.saved} title="33 слова о дизайне" />
        <MoviesCard
          saved={props.saved}
          title="Киноальманах «100 лет дизайна»"
        />
        <MoviesCard saved={props.saved} title="В погоне за Бенкси" />
        <MoviesCard saved={props.saved} title="Баския: Взрыв реальности" />
        <MoviesCard saved={props.saved} title="Бег это свобода" />
        <MoviesCard saved={props.saved} title="Книготорговцы" />
        <MoviesCard
          saved={props.saved}
          title="Когда я думаю о Германии ночью"
        />
        <MoviesCard
          saved={props.saved}
          title="Gimme Danger: История Игги и The Stooges"
        />
        <MoviesCard
          saved={props.saved}
          title="Дженис: Маленькая девочка грустит"
        />
        <MoviesCard saved={props.saved} title="Соберись перед прыжком" />
        <MoviesCard
          saved={props.saved}
          title="Пи Джей Харви: A dog called money"
        />
        <MoviesCard
          saved={props.saved}
          title="По волнам: Искусство звука в кино"
        />
      </ul>
      <div className="cards__button-container">
        <button className="cards__button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
