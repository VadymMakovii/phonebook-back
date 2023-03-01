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
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
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
    password: Joi.string().min(6).required(),
    email: Joi.string()
      .pattern(emailValidationPattern)
      .message(emailValidationMessage)
      .required(),
    subscription: Joi.string().optional(),
  });
  validationResult(req, res, next, schema);
};

const loginValidationSchema = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string()
      .pattern(emailValidationPattern)
      .message(emailValidationMessage)
      .optional(),
  });
  validationResult(req, res, next, schema);
};

const User = model("user", userSchema);

module.exports = {
  User,
  registerValidationSchema,
  loginValidationSchema,
};
