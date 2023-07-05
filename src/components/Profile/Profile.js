import React, { useEffect } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { mainApi } from "../../utils/MainApi";

function Profile({
  isLoggedIn,
  currentUser,
  handleLogout,
  values,
  handleChange,
  isValid,
  setCurrentUser,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    mainApi
      .updateProfile(values.email, values.username)
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header page="profile" isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__input-container">
            <p className="profile__input-name">Имя</p>
            <input
              type="text"
              name="username"
              className="profile__input"
              required
              placeholder={currentUser.name}
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div className="profile__divider"></div>
          <div className="profile__input-container">
            <p className="profile__input-name">E-mail</p>
            <input
              type="email"
              name="email"
              className="profile__input"
              required
              placeholder={currentUser.email}
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <button
            className={`profile__submit-btn ${
              !isValid ? "profile__submit-btn_inactive" : ""
            }`}
            type="submit"
          >
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
