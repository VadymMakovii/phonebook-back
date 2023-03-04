const { signIn } = require("../../services");

const { asyncHandler } = require("../../helpers");

const loginUser = async (req, res) => {
  const result = await signIn(req);
  res.status(200).json(result);
};

module.exports = {
  loginUser: asyncHandler(loginUser),
};
