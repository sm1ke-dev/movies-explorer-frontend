import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

function Movies() {
  return (
    <>
      <Header movies={true} />
      <main className="movies">
        <SearchForm />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
