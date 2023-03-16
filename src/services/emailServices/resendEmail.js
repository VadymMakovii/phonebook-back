const { User } = require("../../../models");
const { HttpError, sendEmail } = require("../../helpers");

const resendEmail = async (req) => {
  const { email } = req.body;

  if (!email) {
    throw HttpError(400, "Missing required field email");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(404, "User not found");
  }

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  
  const msg = {
  to: email,
  subject: 'Verification email',
  html: `<p>Please follow the link to confirm your email address</p><a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}">Confirm email</a>`,
  }

  sendEmail(msg);
};

module.exports = { resendEmail };
