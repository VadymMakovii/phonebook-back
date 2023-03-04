const {
  Contact,
  addContactValidation,
  updateContactValidation,
  updateFavoriteValidation
} = require("./contact");

const {
  User,
  registerValidationSchema,
  loginValidationSchema,
  updateSubscriptionValidation
} = require("./user");


module.exports = {
  Contact,
  User,
  addContactValidation,
  updateContactValidation,
  updateFavoriteValidation,
  registerValidationSchema,
  loginValidationSchema,
  updateSubscriptionValidation
};