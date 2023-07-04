import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ isLoggedIn }) {
  return (
    <>
      <Header page="saved" isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList saved={true} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
