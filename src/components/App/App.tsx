import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { mainApi } from "../../utils/MainApi";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";

export type User = {
  name: string;
  email: string;
  password: string;
};

type Movie = {
  country: string;
  director: string;
  duration: number;
  year: string;
  description: string;
  trailerLink: string;
  thumbnail: string;
  nameRU: string;
  nameEN: string;
};

export type MainMovie = Movie & {
  image: {
    url: string;
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
  id: number;
};

export type SavedMovie = Movie & {
  image: string;
  owner: string;
  movieId: number;
  _id: string;
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [initialSavedMovies, setInitialSavedMovies] = useState<SavedMovie[]>(
    []
  );
  const [savedMovies, setSavedMovies] = useState<SavedMovie[]>([]);
  const [isMoviesArrayEmpty, setIsMoviesArrayEmpty] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const navigate = useNavigate();

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    isLoggedIn && getMovies();
  }, [isLoggedIn]);

  const tokenCheck = () => {
    if (localStorage.getItem("token")) {
      mainApi.getMyInfo().then((res: { data: User }) => {
        setIsLoggedIn(true);
        setCurrentUser(res.data);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mainApi
      .register(values.email!, values.username!, values.password!)
      .then((res: { data: User }) => {
        mainApi
          .login(values.email!, values.password!)
          .then((message) => {
            resetForm();
            setIsLoggedIn(true);
            localStorage.setItem("token", "tokenIsActive");
            setCurrentUser(res.data);
            navigate("/movies", { replace: true });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mainApi
      .login(values.email!, values.password!)
      .then((res: { message: string }) => {
        resetForm();
        mainApi.getMyInfo().then((user: { data: User }) => {
          setIsLoggedIn(true);
          localStorage.setItem("token", "tokenIsActive");
          setCurrentUser(user.data);
          navigate("/movies", { replace: true });
        });
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    mainApi
      .logout()
      .then((res: { message: string }) => {
        localStorage.clear();
        setIsLoggedIn(false);
        setCurrentUser({
          name: "",
          email: "",
          password: "",
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const getMovies = () => {
    mainApi
      .getMovies()
      .then((res: { data: SavedMovie[] }) => {
        setInitialSavedMovies(res.data);
        setSavedMovies(res.data);
      })
      .catch((err) => console.log(err));
  };

  const saveMovie = (card: MainMovie) => {
    mainApi
      .saveMovie(card)
      .then((res: { data: SavedMovie }) => {
        getMovies();
      })
      .catch((err) => console.log(err));
  };

  const deleteMovie = (card: SavedMovie) => {
    if (localStorage.getItem("foundMovies")) {
      setSavedMovies(
        JSON.parse(localStorage.getItem("foundMovies")!).filter(
          (el: SavedMovie) => el.movieId !== card.movieId
        )
      );
      mainApi
        .deleteMovie(card)
        .then((res: { data: SavedMovie }) => {
          setInitialSavedMovies(
            initialSavedMovies.filter((el) => el.movieId !== res.data.movieId)
          );
        })
        .catch((err) => console.log(err));
    } else {
      mainApi
        .deleteMovie(card)
        .then((res: { data: SavedMovie }) => {
          getMovies();
        })
        .catch((err) => console.log(err));
    }
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        <Route
          path="/movies"
          element={
            <ProtectedRouteElement
              isLoggedIn={isLoggedIn}
              outlet={
                <Movies
                  isLoggedIn={isLoggedIn}
                  initialSavedMovies={initialSavedMovies}
                  saveMovie={saveMovie}
                  deleteMovie={deleteMovie}
                  isMoviesArrayEmpty={isMoviesArrayEmpty}
                  setIsMoviesArrayEmpty={setIsMoviesArrayEmpty}
                />
              }
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRouteElement
              isLoggedIn={isLoggedIn}
              outlet={
                <SavedMovies
                  isLoggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  initialSavedMovies={initialSavedMovies}
                  deleteMovie={deleteMovie}
                  isMoviesArrayEmpty={isMoviesArrayEmpty}
                  setIsMoviesArrayEmpty={setIsMoviesArrayEmpty}
                />
              }
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRouteElement
              isLoggedIn={isLoggedIn}
              outlet={
                <Profile
                  isLoggedIn={isLoggedIn}
                  currentUser={currentUser}
                  handleLogout={handleLogout}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Register
              values={values}
              handleChange={handleChange}
              errors={errors}
              isValid={isValid}
              onSubmit={handleRegister}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              values={values}
              handleChange={handleChange}
              errors={errors}
              isValid={isValid}
              onSubmit={handleLogin}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
