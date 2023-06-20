import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <Promo />
      </main>
    </>
  );
}

export default Main;
