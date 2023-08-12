import React from "react";
import "./SaveButton.css";
import savedIcon from "../../images/saved-icon.svg";

type SaveButtonProps = {
  isSaved: boolean;
  handleCardLike: () => void;
};

const SaveButton: React.FC<SaveButtonProps> = ({ isSaved, handleCardLike }) => {
  return (
    <div
      className={`save-button ${isSaved ? "save-button_clicked" : ""}`}
      onClick={handleCardLike}
    >
      {isSaved ? <img className="save-button__icon" src={savedIcon} /> : ""}
    </div>
  );
};

export default SaveButton;
