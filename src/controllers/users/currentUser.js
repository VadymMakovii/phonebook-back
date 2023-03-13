const { asyncHandler } = require("../../helpers");

const currentUser = async (req, res) => {
  const { _id: id, email} = req.user;
  res.status(200).json({
    status: "success",
    code: 200,
    data: { id, email }
  });
};

module.exports = {
  currentUser: asyncHandler(currentUser),
};
