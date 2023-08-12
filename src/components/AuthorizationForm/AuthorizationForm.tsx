import React from "react";
import { AuthProps } from "../Login/Login";
import "./AuthorizationForm.css";

type AuthorizationFormProps = AuthProps & {
  btnText: string;
  children?: React.ReactNode;
};

const AuthorizationForm: React.FC<AuthorizationFormProps> = ({
  children,
  btnText,
  values,
  handleChange,
  errors,
  isValid,
  onSubmit,
}) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
      <p className="form__name">E-mail</p>
      <input
        name="email"
        type="email"
        className="form__input"
        required
        value={values.email}
        onChange={handleChange}
      />
      <span className="form__error">{errors.email}</span>
      <p className="form__name">Пароль</p>
      <input
        name="password"
        type="password"
        className="form__input"
        required
        value={values.password}
        onChange={handleChange}
      />
      <span className="form__error">{errors.password}</span>
      <button
        className={`form__submit-btn ${
          !isValid ? "form__submit-btn_inactive" : ""
        }`}
        type="submit"
      >
        {btnText}
      </button>
    </form>
  );
};

export default AuthorizationForm;
