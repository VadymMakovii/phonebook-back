const {
  getAllContact,
  getById,
  postContact,
  deleteContact,
  putContact,
  patchContact,
} = require("./contacts");

const { registerUser, loginUser, logoutUser } = require("./auth");

const {
  currentUser,
  patchUser,
  updateAvatar,
  verifyEmail,
  resendVerificationEmail
} = require("./users");

module.exports = {
  getAllContact,
  getById,
  postContact,
  deleteContact,
  putContact,
  patchContact,
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
  patchUser,
  updateAvatar,
  verifyEmail,
  resendVerificationEmail
};
