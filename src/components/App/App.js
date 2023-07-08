import { useEffect, useState } from "react";
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [initialSavedMovies, setInitialSavedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
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
      mainApi.getMyInfo().then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res.data);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    mainApi
      .register(values.email, values.username, values.password)
      .then((res) => {
        mainApi
          .login(values.email, values.password)
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

  const handleLogin = (e) => {
    e.preventDefault();

    mainApi
      .login(values.email, values.password)
      .then((res) => {
        resetForm();
        console.log(res);
        mainApi.getMyInfo().then((user) => {
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
      .then((res) => {
        localStorage.clear();
        setIsLoggedIn(false);
        setCurrentUser({});
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const getMovies = () => {
    mainApi
      .getMovies()
      .then((res) => {
        setInitialSavedMovies(res.data);
        setSavedMovies(res.data);
      })
      .catch((err) => console.log(err));
  };

  const saveMovie = (card) => {
    mainApi
      .saveMovie(card)
      .then((res) => {
        getMovies();
      })
      .catch((err) => console.log(err));
  };

  const deleteMovie = (card) => {
    if (localStorage.getItem("foundMovies")) {
      setSavedMovies(
        JSON.parse(localStorage.getItem("foundMovies")).filter(
          (el) => el.movieId !== card.movieId
        )
      );
      mainApi
        .deleteMovie(card)
        .then((res) => {
          console.log(res);
          setInitialSavedMovies(
            initialSavedMovies.filter((el) => el.movieId !== res.data.movieId)
          );
        })
        .catch((err) => console.log(err));
    } else {
      mainApi
        .deleteMovie(card)
        .then((res) => {
          console.log(res);
          getMovies();
        })
        .catch((err) => console.log(err));
    }
  };

  return isLoading ? (
    <Preloader />
  ) : (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        <Route
          path="/movies"
          element={
            <ProtectedRouteElement
              element={Movies}
              isLoggedIn={isLoggedIn}
              initialSavedMovies={initialSavedMovies}
              saveMovie={saveMovie}
              deleteMovie={deleteMovie}
              isMoviesArrayEmpty={isMoviesArrayEmpty}
              setIsMoviesArrayEmpty={setIsMoviesArrayEmpty}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRouteElement
              element={SavedMovies}
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
        <Route
          path="/profile"
          element={
            <ProtectedRouteElement
              element={Profile}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
              handleLogout={handleLogout}
              values={values}
              handleChange={handleChange}
              isValid={isValid}
              setCurrentUser={setCurrentUser}
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
              resetForm={resetForm}
              onSubmit={handleLogin}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
