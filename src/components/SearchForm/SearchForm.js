import React from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
import whiteSearchIcon from "../../images/search-icon-white.svg";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__form-container">
        <div
          className="search__icon"
          style={{ backgroundImage: `url(${searchIcon})` }}
        ></div>
        <form className="search__form">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
          ></input>
          <button
            className="search__button"
            style={{ backgroundImage: `url(${whiteSearchIcon})` }}
            type="submit"
          ></button>
        </form>
        <div className="search__line"></div>
        <div className="search__shorts-container">
          <input type="checkbox" />
          <p className="search__shorts">Короткометражки</p>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
