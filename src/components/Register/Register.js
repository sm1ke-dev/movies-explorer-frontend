import React from "react";
import "./Register.css";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthText from "../AuthText/AuthText";

function Register({ values, handleChange, errors, isValid, resetForm }) {
  return (
    <>
      <AuthHeader page="signup" />
      <main className="register">
        <AuthorizationForm
          btnText="Зарегистрироваться"
          values={values}
          handleChange={handleChange}
          errors={errors}
          isValid={isValid}
          resetForm={resetForm}
        >
          <>
            <p className="form__name">Имя</p>
            <input
              name="username"
              className="form__input"
              required
              minLength="2"
              maxLength="30"
              value={values.username}
              onChange={handleChange}
            />
            <span className="form__error">{errors.username}</span>
          </>
        </AuthorizationForm>
        <AuthText page="signup" />
      </main>
    </>
  );
}

export default Register;
