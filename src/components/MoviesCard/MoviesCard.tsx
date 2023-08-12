import { useState } from "react";
import "./MoviesCard.css";
import SaveButton from "../SaveButton/SaveButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { MainMovie, SavedMovie } from "../App/App";

type MoviesCardProps = {
  mainCardElement?: MainMovie;
  savedCardElement?: SavedMovie;
  saved: boolean;
  initialSavedMovies?: SavedMovie[];
  saveMovie: (i: MainMovie) => void;
  deleteMovie: (i: SavedMovie) => void;
  screenSize: string;
};

const MoviesCard: React.FC<MoviesCardProps> = ({
  mainCardElement,
  savedCardElement,
  saved,
  initialSavedMovies,
  saveMovie,
  deleteMovie,
  screenSize,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardElement = mainCardElement || savedCardElement;
  const isSaved =
    !saved &&
    initialSavedMovies!.some((movie) => movie.movieId === mainCardElement!.id);

  const handleCardLike = () => {
    isSaved
      ? deleteMovie(
          initialSavedMovies!.find(
            (movie) => movie.movieId === mainCardElement!.id
          )!
        )
      : saveMovie(mainCardElement!);
  };

  const handleDelete = () => {
    deleteMovie(savedCardElement!);
  };

  const convertTime = (mins: number) => {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return hours + "ч " + minutes;
  };

  return (
    <li
      className="card"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="card__img-container">
        <a href={cardElement!.trailerLink} target="_blank">
          <img
            className="card__img"
            src={
              saved
                ? savedCardElement!.image
                : `https://api.nomoreparties.co${mainCardElement!.image.url}`
            }
            alt="Фильм"
          />
        </a>
      </div>
      <div className="card__about-container">
        <h4 className="card__title">{cardElement!.nameRU}</h4>
        <div className="card__time-container">
          <p className="card__time">
            {cardElement!.duration > 59
              ? convertTime(cardElement!.duration)
              : cardElement!.duration}
            м
          </p>
        </div>
      </div>
      {!saved && isHovered && !isSaved && (
        <SaveButton isSaved={isSaved} handleCardLike={handleCardLike} />
      )}
      {!saved && isSaved && (
        <SaveButton isSaved={isSaved} handleCardLike={handleCardLike} />
      )}
      {!saved && (screenSize === "medium" || screenSize === "small") && (
        <SaveButton isSaved={isSaved} handleCardLike={handleCardLike} />
      )}
      {saved && isHovered && <DeleteButton handleDelete={handleDelete} />}
      {saved && (screenSize === "medium" || screenSize === "small") && (
        <DeleteButton handleDelete={handleDelete} />
      )}
    </li>
  );
};

export default MoviesCard;
