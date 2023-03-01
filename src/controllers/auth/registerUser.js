const { addUser } = require("../../services");

const { asyncHandler } = require("../../helpers");

const registerUser = async (req, res) => {
  const newUser = await addUser(req.body);
  res.status(201).json({email: newUser.email});
};

module.exports = {
  registerUser: asyncHandler(registerUser),
};
