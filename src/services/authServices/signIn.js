const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../../models");
const { HttpError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const signIn = async (req) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401);
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare || !user.verify) {
    throw HttpError(401, "Email is wrong or not verify, or password invalid");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });

  const updatedUser = await User.findByIdAndUpdate(user._id, { token }).select(
    "-_id email subscription"
  );

  const responseBody = {
    token,
    user: updatedUser,
  };

  return responseBody;
};

module.exports = {
  signIn,
};
