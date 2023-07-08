import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  const [cardsShown, setCardsShown] = useState(12);
  const [showMore, setShowMore] = useState(3);
  const [screenSize, setScreenSize] = useState("large");

  useEffect(() => {
    if (window.innerWidth > 689 && window.innerWidth < 1100) {
      setCardsShown(8);
      setShowMore(2);
      setScreenSize("medium");
    } else if (window.innerWidth > 319 && window.innerWidth < 690) {
      setCardsShown(5);
      setShowMore(2);
      setScreenSize("small");
    }
  }, []);

  const showMoreCards = () => {
    setCardsShown((prev) => prev + showMore);
  };

  return (
    <section className="cards">
      {props.isMoviesArrayEmpty && (
        <span className="cards__error">Ничего не найдено</span>
      )}
      <ul className="cards__list">
        {!props.saved
          ? props.movies
              .slice(0, cardsShown)
              .map((movie) => (
                <MoviesCard
                  cardElement={movie}
                  key={movie.id}
                  saved={props.saved}
                  initialSavedMovies={props.initialSavedMovies}
                  saveMovie={props.saveMovie}
                  deleteMovie={props.deleteMovie}
                  screenSize={screenSize}
                />
              ))
          : props.movies.map((movie) => (
              <MoviesCard
                cardElement={movie}
                key={movie.id}
                saved={props.saved}
                saveMovie={props.saveMovie}
                deleteMovie={props.deleteMovie}
                screenSize={screenSize}
              />
            ))}
      </ul>
      {!props.saved && props.movies.length > cardsShown && (
        <div className="cards__button-container">
          <button className="cards__button" onClick={showMoreCards}>
            Ещё
          </button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
