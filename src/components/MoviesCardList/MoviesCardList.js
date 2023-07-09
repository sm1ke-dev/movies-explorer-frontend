import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  const [cardsShown, setCardsShown] = useState(12);
  const [showMore, setShowMore] = useState(3);
  const [screenSize, setScreenSize] = useState("large");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => {
      setWidth(e.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width > 689 && width < 1100) {
      setCardsShown(8);
      setShowMore(2);
      setScreenSize("medium");
    } else if (width > 319 && width < 690) {
      setCardsShown(5);
      setShowMore(2);
      setScreenSize("small");
    } else {
      setCardsShown(12);
      setShowMore(3);
      setScreenSize("large");
    }
  }, [width]);

  const showMoreCards = () => {
    setCardsShown((prev) => prev + showMore);
  };

  return (
    <section className="cards">
      {props.isMoviesArrayEmpty && !props.isFirstRender && (
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
                key={movie.movieId}
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
