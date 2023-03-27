const { asyncHandler } = require("../../helpers");

const currentUser = async (req, res) => {
  const {name, email} = req.user;
  res.status(200).json({
    status: "success",
    code: 200,
    data: { name, email }
  });
};

module.exports = {
  currentUser: asyncHandler(currentUser),
};
