const { Schema, model } = require("mongoose");
const Joi = require("joi");
const {HttpError} = require('../../src/helpers');

const {
  mongooseErrorHandler,
  phoneValidationPattern,
  nameValidationPattern,
  phoneValidationMessage
} = require("../../src/helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    phone: {
      type: String,
      required: [true, "Set phone for contact"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", mongooseErrorHandler);

const validationResult = (req, res, next, schema) => {
  const result = schema.validate(req.body);
  const errorMessage  = result.error?.details[0]?.message;
  if (result.error) {
    throw HttpError(400, errorMessage);
  }
  next();
};

const addContactValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().pattern(nameValidationPattern).min(2).max(30).required(),
    phone: Joi.string()
      .min(10)
      .max(19)
      .pattern(phoneValidationPattern)
      .message(phoneValidationMessage)
      .required(),
  });
  validationResult(req, res, next, schema);
};

const updateContactValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().pattern(nameValidationPattern).min(2).max(30).optional(),
    phone: Joi.string()
      .min(10)
      .max(20)
      .pattern(phoneValidationPattern)
      .message(phoneValidationMessage)
      .optional(),
  });
  validationResult(req, res, next, schema);
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  addContactValidation,
  updateContactValidation
};
