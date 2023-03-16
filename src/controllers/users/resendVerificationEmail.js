const { asyncHandler } = require("../../helpers");
const { resendEmail } = require("../../services");

const resendVerificationEmail = async (req, res) => {
  await resendEmail(req);

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Verification email sent",
  });
};

module.exports = {
  resendVerificationEmail: asyncHandler(resendVerificationEmail),
};
