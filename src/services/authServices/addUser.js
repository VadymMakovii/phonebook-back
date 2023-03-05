const bcrypt = require("bcryptjs");
const { User } = require("../../../models");
const { HttpError } = require("../../helpers");

const addUser = async (body) => {
  const { email, password } = body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email is already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...body, password: hashPassword });

  return newUser;
};

module.exports = {
  addUser,
};
