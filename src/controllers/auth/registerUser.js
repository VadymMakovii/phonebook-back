const { addUser } = require("../../services");

const { asyncHandler } = require("../../helpers");

const registerUser = async (req, res) => {
  
  const newUser = await addUser(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        name: newUser.name,
        email: newUser.email,
      },
      token: newUser.token,
      avatarURL: newUser.avatarURL 
    },
  });
};

module.exports = {
  registerUser: asyncHandler(registerUser),
};
