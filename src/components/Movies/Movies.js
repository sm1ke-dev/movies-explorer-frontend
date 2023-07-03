import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { moviesApi } from "../../utils/MoviesApi";

function Movies() {
  const [inputValue, setInputValue] = useState("");
  const [initialMoviesCards, setInitialMoviesCards] = useState([]);
  const [moviesCards, setMoviesCards] = useState([]);
  const [isInputOn, setIsInputOn] = useState(false);

  useEffect(() => {
    if (isInputOn) {
      setMoviesCards(moviesCards.filter((movie) => movie.duration < 41));
    } else {
      setMoviesCards(initialMoviesCards);
    }
  }, [isInputOn]);

  const handleSubmit = (e) => {
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
      .catch((err) => console.log(err));
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
        <MoviesCardList movies={moviesCards} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
