import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { moviesApi } from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";

function Movies({
  isLoggedIn,
  initialSavedMovies,
  saveMovie,
  deleteMovie,
  isMoviesArrayEmpty,
  setIsMoviesArrayEmpty,
}) {
  const [inputValue, setInputValue] = useState("");
  const [initialMoviesCards, setInitialMoviesCards] = useState([]);
  const [moviesCards, setMoviesCards] = useState([]);
  const [isInputOn, setIsInputOn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    !!moviesCards[0]
      ? setIsMoviesArrayEmpty(false)
      : setIsMoviesArrayEmpty(true);
  }, [moviesCards]);

  useEffect(() => {
    if (isInputOn) {
      setMoviesCards(moviesCards.filter((movie) => movie.duration < 41));
    } else {
      setMoviesCards(initialMoviesCards);
    }
  }, [isInputOn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue) {
      setIsValid(true);
      setIsLoaded(false);

      moviesApi
        .getInitialCards()
        .then((movies) => {
          const foundMovies = [];
          movies.forEach((movie) => {
            if (movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())) {
              foundMovies.push(movie);
            } else if (
              movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())
            ) {
              foundMovies.push(movie);
            }
          });
          setInitialMoviesCards(foundMovies);
          setMoviesCards(foundMovies);
          if (!!foundMovies[0]) {
            setIsMoviesArrayEmpty(false);
          } else {
            setIsMoviesArrayEmpty(true);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoaded(true));
    } else {
      setIsValid(false);
    }
  };

  return (
    <>
      <Header page="movies" isLoggedIn={isLoggedIn} />
      <main className="movies">
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
            movies={moviesCards}
            initialSavedMovies={initialSavedMovies}
            saveMovie={saveMovie}
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

export default Movies;
