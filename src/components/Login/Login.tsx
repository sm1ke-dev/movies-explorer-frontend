import React from "react";
import "./Login.css";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthText from "../AuthText/AuthText";
import { ValidationStates } from "../../hooks/useFormWithValidation";

export type AuthProps = {
  values: ValidationStates;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: ValidationStates;
  isValid: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Login: React.FC<AuthProps> = ({
  values,
  handleChange,
  errors,
  isValid,
  onSubmit,
}) => {
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
          onSubmit={onSubmit}
        />
        <AuthText page="signin" />
      </main>
    </>
  );
};

export default Login;
