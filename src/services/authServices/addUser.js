const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { User } = require("../../../models");
const { HttpError } = require("../../helpers");

const addUser = async (body) => {
  const { email, password } = body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email is already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarUrl = gravatar.url(email);

  const newUser = await User.create({
    ...body,
    password: hashPassword,
    avatarUrl,
  });

  return newUser;
};

module.exports = {
  addUser,
};
