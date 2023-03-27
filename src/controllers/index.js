const {
  getAllContact,
  getById,
  postContact,
  deleteContact,
  putContact
} = require("./contacts");

const { registerUser, loginUser, logoutUser } = require("./auth");

const {
  currentUser,
  updateAvatar
} = require("./users");

module.exports = {
  getAllContact,
  getById,
  postContact,
  deleteContact,
  putContact,
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
  updateAvatar
};
