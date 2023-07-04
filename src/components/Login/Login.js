import React from "react";
import "./Login.css";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthText from "../AuthText/AuthText";

function Login({ values, handleChange, errors, isValid, resetForm }) {
  return (
    <>
      <AuthHeader page="signin" />
      <main className="login">
        <AuthorizationForm
          btnText="Войти"
          values={values}
          handleChange={handleChange}
          errors={errors}
          isValid={isValid}
          resetForm={resetForm}
        />
        <AuthText page="signin" />
      </main>
    </>
  );
}

export default Login;
