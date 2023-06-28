import React from "react";
import "./MoviesCard.css";
import SaveButton from "../SaveButton/SaveButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import moviePic from "../../images/movie-pic.jpg";

function MoviesCard(props) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li
      className="card"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="card__img-container">
        <img className="card__img" src={moviePic} alt="Фильм" />
      </div>
      <div className="card__about-container">
        <h4 className="card__title">{props.title}</h4>
        <div className="card__time-container">
          <p className="card__time">1ч 17м</p>
        </div>
      </div>
      {!props.saved && isHovered && <SaveButton />}
      {props.saved && isHovered && <DeleteButton />}
    </li>
  );
}

export default MoviesCard;
