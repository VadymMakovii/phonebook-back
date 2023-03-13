const { signIn } = require("../../services");

const { asyncHandler } = require("../../helpers");

const loginUser = async (req, res) => {
  const result = await signIn(req);
  res.status(200).json({
    status: "success",
    code: 200,
    data: result
  });
};

module.exports = {
  loginUser: asyncHandler(loginUser),
};
