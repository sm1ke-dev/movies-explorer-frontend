import React, { useState } from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
import whiteSearchIcon from "../../images/search-icon-white.svg";

function SearchForm({
  value,
  onChange,
  onSubmit,
  isInputOn,
  setIsInputOn,
  isValid,
}) {
  return (
    <section className="search">
      <div className="search__form-container">
        <div
          className="search__icon"
          style={{ backgroundImage: `url(${searchIcon})` }}
        ></div>
        <form className="search__form" onSubmit={onSubmit}>
          <input
            className="search__input"
            name="moviename"
            type="text"
            placeholder="Фильм"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          ></input>
          <button
            className="search__button"
            style={{ backgroundImage: `url(${whiteSearchIcon})` }}
            type="submit"
          ></button>
        </form>
        <div className="search__line"></div>
        <div className="search__shorts-container">
          <input type="checkbox" onClick={() => setIsInputOn(!isInputOn)} />
          <p className="search__shorts">Короткометражки</p>
        </div>
      </div>
      {!isValid && (
        <span className="search__error">Нужно ввести ключевое слово</span>
      )}
    </section>
  );
}

export default SearchForm;
