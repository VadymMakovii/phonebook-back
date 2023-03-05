const { registerUser } = require("./registerUser");

const { loginUser } = require("./loginUser");

const { currentUser } = require("./currentUser");

const { logoutUser } = require("./logoutUser");

const { patchUser } = require("./patchUser");

module.exports = {
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
  patchUser,
};
