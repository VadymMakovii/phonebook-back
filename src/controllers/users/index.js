const { updateAvatar } = require("./updateAvatar");

const { currentUser } = require("./currentUser");

const { patchUser } = require("./patchUser");

const { verifyEmail } = require("./verifyEmail");

const { resendVerificationEmail } = require("./resendVerificationEmail");

module.exports = {
  updateAvatar,
  currentUser,
  patchUser,
  verifyEmail,
  resendVerificationEmail,
};
