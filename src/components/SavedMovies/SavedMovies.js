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
}) {
  const [inputValue, setInputValue] = useState("");
  const [isInputOn, setIsInputOn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (isInputOn) {
      setSavedMovies(savedMovies.filter((movie) => movie.duration < 41));
    } else {
      setSavedMovies(initialSavedMovies);
    }
  }, [isInputOn]);

  const handleSubmit = (e) => {
    const foundMovies = [];

    setIsLoaded(false);
    e.preventDefault();

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
        />
        {isLoaded ? (
          <MoviesCardList
            saved={true}
            movies={savedMovies}
            deleteMovie={deleteMovie}
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
