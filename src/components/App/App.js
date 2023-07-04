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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const navigate = useNavigate();

  useEffect(() => {
    tokenCheck();
  }, []);

  const tokenCheck = () => {
    if (localStorage.getItem("token")) {
      mainApi.getMyInfo().then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res.data);
        if (
          window.location.pathname === "/signup" ||
          window.location.pathname === "/signin"
        ) {
          navigate("/", { replace: true });
        }
      });
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
            navigate("/", { replace: true });
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
          setCurrentUser(user.data);
          navigate("/", { replace: true });
        });
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    mainApi
      .logout()
      .then((res) => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setCurrentUser({});
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/profile"
          element={
            <Profile
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
              handleLogout={handleLogout}
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
