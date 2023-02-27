const phoneValidationPattern = /^\+?[0-9]{0,3}?\s?\(?[0-9]{0,3}?\)?[0-9\s?\-?]*$/;
const nameValidationPattern = /^[a-zA-Z]*\s?[a-zA-Z]*$/;
const phoneValidationMessage =
  "The phone number must contain only numbers from 0 to 9, spaces and symbols: +, (), -";


  module.exports = {
  phoneValidationPattern,
  nameValidationPattern,
  phoneValidationMessage
};
