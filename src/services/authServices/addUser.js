const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const { User } = require("../../../models");
const { HttpError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const addUser = async (body) => {
  const { email, password } = body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email is already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);

  const payload = {
    email
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });
  
  const newUser = await User.create({
    ...body,
    password: hashPassword,
    avatarURL,
    token,
  });

  return newUser;
};

module.exports = {
  addUser,
};
