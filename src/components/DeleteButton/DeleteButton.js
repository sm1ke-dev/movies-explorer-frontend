import React from "react";
import "./DeleteButton.css";
import deleteIcon from "../../images/delete-icon.svg";

function DeleteButton() {
  return (
    <div className="delete-button">
      <img className="delete-button__icon" src={deleteIcon} />
    </div>
  );
}

export default DeleteButton;
