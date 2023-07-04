import React from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile({ isLoggedIn, currentUser, handleLogout }) {
  return (
    <>
      <Header page="profile" isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form">
          <div className="profile__input-container">
            <p className="profile__input-name">Имя</p>
            <input className="profile__input" placeholder={currentUser.name} />
          </div>
          <div className="profile__divider"></div>
          <div className="profile__input-container">
            <p className="profile__input-name">E-mail</p>
            <input className="profile__input" placeholder={currentUser.email} />
          </div>
          <button className="profile__submit-btn" type="submit">
            Редактировать
          </button>
        </form>
        <button className="profile__sign-out" onClick={handleLogout}>
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
}

export default Profile;
