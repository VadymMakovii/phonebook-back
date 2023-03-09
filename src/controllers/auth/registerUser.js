const { addUser } = require("../../services");

const { asyncHandler } = require("../../helpers");

const registerUser = async (req, res) => {
  const newUser = await addUser(req.body);
  res.status(201).json({
    status: "success",
    code: 200,
    data: {
      email: newUser.email,
      subscription: newUser.subscription,
      avatarURL: newUser.avatarURL 
    },
  });
};

module.exports = {
  registerUser: asyncHandler(registerUser),
};
