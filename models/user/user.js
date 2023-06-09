const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { HttpError } = require("../../src/helpers");

const {
  mongooseErrorHandler,
  emailValidationPattern,
  emailValidationMessage,
} = require("../../src/helpers");

const userSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      required: [true, "Set username"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      match: emailValidationPattern,
      unique: true,
      required: [true, "Email is required"],
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: [true, "Avatar is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", mongooseErrorHandler);

const validationResult = (req, res, next, schema) => {
  const result = schema.validate(req.body);
  const errorMessage = result.error?.details[0]?.message;
  if (result.error) {
    throw HttpError(400, errorMessage);
  }
  next();
};

const registerValidationSchema = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string()
      .pattern(emailValidationPattern)
      .message(emailValidationMessage)
      .required(),
  });
  validationResult(req, res, next, schema);
};

const loginValidationSchema = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string()
      .pattern(emailValidationPattern)
      .message(emailValidationMessage)
      .required(),
  });
  validationResult(req, res, next, schema);
};

const User = model("user", userSchema);

module.exports = {
  User,
  registerValidationSchema,
  loginValidationSchema
};
