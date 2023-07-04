import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { moviesApi } from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";

function Movies() {
  const [inputValue, setInputValue] = useState("");
  const [initialMoviesCards, setInitialMoviesCards] = useState([]);
  const [moviesCards, setMoviesCards] = useState([]);
  const [isInputOn, setIsInputOn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (isInputOn) {
      setMoviesCards(moviesCards.filter((movie) => movie.duration < 41));
    } else {
      setMoviesCards(initialMoviesCards);
    }
  }, [isInputOn]);

  const handleSubmit = (e) => {
    setIsLoaded(false);
    e.preventDefault();

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
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoaded(true));
  };

  return (
    <>
      <Header page="movies" loggedIn={true} />
      <main className="movies">
        <SearchForm
          value={inputValue}
          onChange={setInputValue}
          onSubmit={handleSubmit}
          isInputOn={isInputOn}
          setIsInputOn={setIsInputOn}
        />
        {isLoaded ? <MoviesCardList movies={moviesCards} /> : <Preloader />}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
