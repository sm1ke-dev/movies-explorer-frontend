import React from "react";
import "./SaveButton.css";
import savedIcon from "../../images/saved-icon.svg";

function SaveButton() {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <div
      className={`save-button ${isClicked ? "save-button_clicked" : ""}`}
      onClick={() => setIsClicked(!isClicked)}
    >
      {isClicked ? <img className="save-button__icon" src={savedIcon} /> : ""}
    </div>
  );
}

export default SaveButton;
