import React from "react";
import "./Register.css";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthText from "../AuthText/AuthText";
import { AuthProps } from "../Login/Login";

const Register: React.FC<AuthProps> = ({
  values,
  handleChange,
  errors,
  isValid,
  onSubmit,
}) => {
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
          onSubmit={onSubmit}
        >
          <>
            <p className="form__name">Имя</p>
            <input
              name="username"
              type="text"
              className="form__input"
              required
              minLength={2}
              maxLength={30}
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
};

export default Register;
