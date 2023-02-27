const { Schema, model } = require("mongoose");
const Joi = require("joi");

const {
  mongooseErrorHandler,
  phoneValidationPattern,
  nameValidationPattern,
  phoneValidationMessage,
} = require("../../src/helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
    },
    phone: {
      type: String,
      required: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", mongooseErrorHandler);

const validationResult = (req, res, next, schema) => {
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).json(result.error.details);
  }
  next();
};

const addContactValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().pattern(nameValidationPattern).min(2).max(30).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    phone: Joi.string()
      .min(10)
      .max(19)
      .pattern(phoneValidationPattern)
      .message(phoneValidationMessage)
      .required(),
    favorite: Joi.boolean().optional(),
  });
  validationResult(req, res, next, schema);
};

const updateContactValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().pattern(nameValidationPattern).min(2).max(30).optional(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .optional(),
    phone: Joi.string()
      .min(10)
      .max(20)
      .pattern(phoneValidationPattern)
      .message(phoneValidationMessage)
      .optional(),
    favorite: Joi.boolean().optional(),
  });
  validationResult(req, res, next, schema);
};

const updateFavoriteValidation = (req, res, next) => {
  const schema = Joi.object({
    favorite: Joi.boolean().required(),
  });
  validationResult(req, res, next, schema);
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  addContactValidation,
  updateContactValidation,
  updateFavoriteValidation,
};
