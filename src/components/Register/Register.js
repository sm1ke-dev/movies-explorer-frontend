import React from "react";
import "./Register.css";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthText from "../AuthText/AuthText";

function Register() {
  return (
    <>
      <AuthHeader page="signup" />
      <main className="register">
        <AuthorizationForm btnText="Зарегистрироваться">
          <>
            <p className="form__name">Имя</p>
            <input className="form__input" />
          </>
        </AuthorizationForm>
        <AuthText page="signup" />
      </main>
    </>
  );
}

export default Register;
