import React from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  return (
    <>
      <Header page="profile" loggedIn={true} />
      <main className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form">
          <div className="profile__input-container">
            <p className="profile__input-name">Имя</p>
            <input className="profile__input" placeholder="Виталий" />
          </div>
          <div className="profile__divider"></div>
          <div className="profile__input-container">
            <p className="profile__input-name">E-mail</p>
            <input className="profile__input" placeholder="pochta@yandex.ru" />
          </div>
          <button className="profile__submit-btn" type="submit">
            Редактировать
          </button>
        </form>
        <button className="profile__sign-out">Выйти из аккаунта</button>
      </main>
    </>
  );
}

export default Profile;
