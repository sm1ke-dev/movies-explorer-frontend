import React from "react";
import "./Login.css";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthText from "../AuthText/AuthText";

function Login() {
  return (
    <>
      <AuthHeader page="signin" />
      <main className="login">
        <AuthorizationForm btnText="Войти" />
        <AuthText page="signin" />
      </main>
    </>
  );
}

export default Login;
