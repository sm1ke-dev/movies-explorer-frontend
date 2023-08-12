import React, { useEffect, useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { mainApi } from "../../utils/MainApi";
import { useProfileFormValidation } from "../../hooks/useFormWithValidation";
import { User } from "../App/App";

type ProfileProps = {
  isLoggedIn: boolean;
  currentUser: User;
  handleLogout: () => void;
  setCurrentUser: (i: User) => void;
};

const Profile: React.FC<ProfileProps> = ({
  isLoggedIn,
  currentUser,
  handleLogout,
  setCurrentUser,
}) => {
  const { values, handleChange, isValid } = useProfileFormValidation({
    username: currentUser.name,
    email: currentUser.email,
  });
  const [message, setMessage] = useState("");
  const [isValueNew, setIsValueNew] = useState(false);

  useEffect(() => {
    values.username === currentUser.name && values.email === currentUser.email
      ? setIsValueNew(false)
      : setIsValueNew(true);
  }, [values]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mainApi
      .updateProfile(values.email, values.username)
      .then((res: { data: User }) => {
        setCurrentUser(res.data);
        setMessage("Данные успешно обновлены");
        setIsValueNew(false);
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
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <span className="profile__message">{message}</span>
          <button
            className={`profile__submit-btn ${
              !isValid || !isValueNew ? "profile__submit-btn_inactive" : ""
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
};

export default Profile;
