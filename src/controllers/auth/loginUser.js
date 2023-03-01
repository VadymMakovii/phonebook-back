const { signIn } = require("../../services");

const { asyncHandler } = require("../../helpers");

const loginUser = async (req, res) => {
  const result = await signIn(req.body);
  res.status(201).json({ token: result });
};

module.exports = {
  loginUser: asyncHandler(loginUser),
};
