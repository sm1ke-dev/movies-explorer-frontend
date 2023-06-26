import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies() {
  return (
    <>
      <Header movies={true} />
      <main className="movies"></main>
      <Footer />
    </>
  );
}

export default Movies;
