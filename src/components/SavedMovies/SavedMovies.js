import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies({
  isLoggedIn,
  savedMovies,
  setSavedMovies,
  initialSavedMovies,
  deleteMovie,
  isMoviesArrayEmpty,
  setIsMoviesArrayEmpty,
}) {
  const [inputValue, setInputValue] = useState("");
  const [isInputOn, setIsInputOn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (!!savedMovies[0]) {
      setIsMoviesArrayEmpty(false);
      localStorage.setItem("foundMovies", JSON.stringify(savedMovies));
    } else {
      setIsMoviesArrayEmpty(true);
      localStorage.removeItem("foundMovies");
    }
  }, [savedMovies]);

  useEffect(() => {
    if (isInputOn) {
      setSavedMovies(savedMovies.filter((movie) => movie.duration < 41));
    } else {
      setSavedMovies(initialSavedMovies);
    }
  }, [isInputOn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue) {
      setIsValid(true);
      setIsLoaded(false);

      const foundMovies = [];

      savedMovies.forEach((movie) => {
        if (movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())) {
          foundMovies.push(movie);
        } else if (
          movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())
        ) {
          foundMovies.push(movie);
        }
      });

      setSavedMovies(foundMovies);
      setIsLoaded(true);
      localStorage.setItem("foundMovies", JSON.stringify(foundMovies));
      if (!!foundMovies[0]) {
        setIsMoviesArrayEmpty(false);
      } else {
        setIsMoviesArrayEmpty(true);
      }
    } else {
      setIsValid(false);
    }
  };

  return (
    <>
      <Header page="saved" isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm
          value={inputValue}
          onChange={setInputValue}
          onSubmit={handleSubmit}
          isInputOn={isInputOn}
          setIsInputOn={setIsInputOn}
          isValid={isValid}
        />
        {isLoaded ? (
          <MoviesCardList
            saved={true}
            movies={savedMovies}
            deleteMovie={deleteMovie}
            isMoviesArrayEmpty={isMoviesArrayEmpty}
          />
        ) : (
          <Preloader />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
