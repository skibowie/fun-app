const errorMessages = Object.freeze({
  isRequired: "Pole jest wymagane",
  passIsToShort: "Hasło musi pusiadać przynajmniej 8 liter",
  wrongEmail: "Nieprawidłowy adres e-mail",
  isNotTheSamePass: "Hasła róznią się od siebie",
});

export const validateEmail = (email) => {
  if (!email) {
    return errorMessages.isRequired;
  }
  if (!email.includes("@") || !email.includes(".")) {
    return errorMessages.wrongEmail;
  }
  return "";
};

export const validatePass = (password) => {
  if (!password) {
    return errorMessages.isRequired;
  }
  if (password.length < 8) {
    return errorMessages.passIsToShort;
  }
  return "";
};

export const isTheSamePass = (password, repeatPassword) => {
  return password === repeatPassword ? "" : errorMessages.isNotTheSamePass;
};

export const validateIsRequired = (value) => {
  return value === "" ? errorMessages.isRequired : "";
};
