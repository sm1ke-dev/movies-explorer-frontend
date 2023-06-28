import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <>
      <Header page="saved" />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList saved={true} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
