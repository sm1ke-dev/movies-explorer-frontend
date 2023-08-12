import React, { useEffect, useState } from "react";
import { MainMovie, SavedMovie } from "../App/App";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

type MoviesCardListProps = {
  movies?: MainMovie[];
  savedMovies?: SavedMovie[];
  initialSavedMovies?: SavedMovie[];
  saveMovie?: (i: MainMovie) => void;
  deleteMovie: (i: SavedMovie) => void;
  isMoviesArrayEmpty?: boolean;
  isFirstRender?: boolean;
  saved?: boolean;
};

const MoviesCardList: React.FC<MoviesCardListProps> = ({
  movies,
  savedMovies,
  initialSavedMovies,
  saveMovie,
  deleteMovie,
  isMoviesArrayEmpty,
  isFirstRender,
  saved,
}) => {
  const [cardsShown, setCardsShown] = useState(12);
  const [showMore, setShowMore] = useState(3);
  const [screenSize, setScreenSize] = useState("large");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e: Event) => {
      const target = e.target as Window;
      setWidth(target.innerWidth);
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
      {isMoviesArrayEmpty && !isFirstRender && (
        <span className="cards__error">Ничего не найдено</span>
      )}
      <ul className="cards__list">
        {!saved
          ? movies!
              .slice(0, cardsShown)
              .map((movie) => (
                <MoviesCard
                  mainCardElement={movie}
                  key={movie.id}
                  saved={saved!}
                  initialSavedMovies={initialSavedMovies}
                  saveMovie={saveMovie!}
                  deleteMovie={deleteMovie}
                  screenSize={screenSize}
                />
              ))
          : savedMovies!.map((movie) => (
              <MoviesCard
                savedCardElement={movie}
                key={movie.movieId}
                saved={saved}
                saveMovie={saveMovie!}
                deleteMovie={deleteMovie}
                screenSize={screenSize}
              />
            ))}
      </ul>
      {!saved && movies!.length > cardsShown && (
        <div className="cards__button-container">
          <button className="cards__button" onClick={showMoreCards}>
            Ещё
          </button>
        </div>
      )}
    </section>
  );
};

export default MoviesCardList;
