const { overwriteAvatar } = require("../../services");
const { asyncHandler } = require("../../helpers");


const updateAvatar = async (req, res) => {
  const result = await overwriteAvatar(req);
  
  res.status(200).json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = {
  updateAvatar: asyncHandler(updateAvatar),
};
