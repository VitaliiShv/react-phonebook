const { useState, useEffect } = require("react");

const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);

  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;

        case "isEmail":
          const regExEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/;
          regExEmail.test(value) ? setEmailError(false) : setEmailError(true);
          break;

        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;

        case "isPassword":
          const regExPassword = /^[a-zA-Z]\w{6,}$/;
          regExPassword.test(value)
            ? setPasswordError(false)
            : setPasswordError(true);
          break;

        default:
          break;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    isEmpty || minLengthError || emailError || passwordError
      ? setInputValid(false)
      : setInputValid(true);
  }, [isEmpty, minLengthError, emailError, passwordError, validations]);

  return {
    isEmpty,
    minLengthError,
    emailError,
    passwordError,
    inputValid,
  };
};

export default useValidation;
