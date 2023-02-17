const Joi = require("joi");

const phoneValidationPattern = new RegExp(
  "^[0-9+ ()]{3,6}?[0-9 -]{9,12}$",
  undefined
);
const phoneValidationMessage =
  "The phone number must contain only numbers from 0 to 9, spaces and symbols: +, (), -";

const validationResult = (req, res, next, schema) => {
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).json(result.error.details);
  }
  next();
};

const addContactValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(2).max(30).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    phone: Joi.string()
      .min(10)
      .max(20)
      .pattern(phoneValidationPattern)
      .message(phoneValidationMessage)
      .required(),
  });
  validationResult(req, res, next, schema);
};

const updateContactValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(2).max(30).optional(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .optional(),
    phone: Joi.string()
      .min(10)
      .max(20)
      .pattern(phoneValidationPattern)
      .message(phoneValidationMessage)
      .optional(),
  });
  validationResult(req, res, next, schema);
};

module.exports = {
  addContactValidation,
  updateContactValidation,
};
