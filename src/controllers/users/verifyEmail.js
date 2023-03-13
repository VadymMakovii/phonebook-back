const { asyncHandler } = require("../../helpers");
const { verifyUserEmail } = require("../../services");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;

  await verifyUserEmail(verificationToken);

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Verification successful",
  });
};

module.exports = {
  verifyEmail: asyncHandler(verifyEmail),
};
