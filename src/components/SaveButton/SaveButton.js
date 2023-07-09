import React from "react";
import "./SaveButton.css";
import savedIcon from "../../images/saved-icon.svg";

function SaveButton({ isSaved, handleCardLike }) {
  return (
    <div
      className={`save-button ${isSaved ? "save-button_clicked" : ""}`}
      onClick={handleCardLike}
    >
      {isSaved ? <img className="save-button__icon" src={savedIcon} /> : ""}
    </div>
  );
}

export default SaveButton;
