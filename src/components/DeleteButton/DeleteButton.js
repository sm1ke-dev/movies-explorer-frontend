import React from "react";
import "./DeleteButton.css";
import deleteIcon from "../../images/delete-icon.svg";

function DeleteButton({ handleDelete }) {
  return (
    <div className="delete-button" onClick={handleDelete}>
      <img className="delete-button__icon" src={deleteIcon} />
    </div>
  );
}

export default DeleteButton;
