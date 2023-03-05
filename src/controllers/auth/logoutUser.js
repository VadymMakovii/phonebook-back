const { User } = require("../../../models");

const { asyncHandler } = require("../../helpers");

const logoutUser = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  res.status(204).json();
};

module.exports = {
  logoutUser: asyncHandler(logoutUser),
};
