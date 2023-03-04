const {
  getAllContact,
  getById,
  postContact,
  deleteContact,
  putContact,
  patchContact,
} = require("./contacts");

const {
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
  patchUser,
} = require("./auth");

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
};
