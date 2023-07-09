import { useState, useCallback } from "react";
import * as EmailValidator from "email-validator";

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === "email" && !EmailValidator.validate(value)) {
      target.setCustomValidity("Введите корректный email");
    } else {
      target.setCustomValidity("");
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}

export function useProfileFormValidation(defaultValues) {
  const [values, setValues] = useState(defaultValues);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === "email" && !EmailValidator.validate(value)) {
      target.setCustomValidity("Введите корректный email");
    } else {
      target.setCustomValidity("");
    }

    setValues({ ...values, [name]: value });
    setIsValid(target.closest("form").checkValidity());
  };

  return { values, handleChange, isValid };
}
