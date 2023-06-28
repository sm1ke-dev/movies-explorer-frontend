import React, { Children } from "react";
import "./AuthorizationForm.css";

function AuthorizationForm(props) {
  return (
    <form className="form">
      {props.children}
      <p className="form__name">E-mail</p>
      <input className="form__input" required />
      <p className="form__name">Пароль</p>
      <input className="form__input" required />
      <button className="form__submit-btn" type="submit">
        {props.btnText}
      </button>
    </form>
  );
}

export default AuthorizationForm;
