import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  const [cardsShown, setCardsShown] = useState(12);
  const [showMore, setShowMore] = useState(3);

  useEffect(() => {
    if (window.innerWidth > 689 && window.innerWidth < 1100) {
      setCardsShown(8);
      setShowMore(2);
    } else if (window.innerWidth > 319 && window.innerWidth < 690) {
      setCardsShown(5);
      setShowMore(2);
    }
  }, []);

  const showMoreCards = () => {
    setCardsShown((prev) => prev + showMore);
  };

  return (
    <section className="cards">
      <ul className="cards__list">
        {props.movies.slice(0, cardsShown).map((movie) => (
          <MoviesCard
            cardElement={movie}
            key={movie.id}
            saved={props.saved}
            savedMovies={props.savedMovies}
            saveMovie={props.saveMovie}
            deleteMovie={props.deleteMovie}
          />
        ))}
      </ul>
      {props.movies.length > cardsShown && (
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
