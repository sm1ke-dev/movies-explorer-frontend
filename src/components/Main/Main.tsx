import React, { useEffect } from "react";
import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

type MainProps = {
  isLoggedIn: boolean;
};

const Main: React.FC<MainProps> = ({ isLoggedIn }) => {
  return (
    <>
      <Header page="main" isLoggedIn={isLoggedIn} />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
};

export default Main;
