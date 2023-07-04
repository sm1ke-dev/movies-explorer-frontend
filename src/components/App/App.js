import { Routes, Route } from "react-router-dom";

import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function App() {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/signup"
          element={
            <Register
              values={values}
              handleChange={handleChange}
              errors={errors}
              isValid={isValid}
              resetForm={resetForm}
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
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
